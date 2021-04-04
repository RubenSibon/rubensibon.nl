<template>
  <component
    :is="tag"
    ref="slideScreen"
    v-pan="onPan"
    class="slide-screen"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

import { TweenMax, Elastic } from "gsap";

interface Adjacent {
  top?: string,
  right?: string,
  bottom?: string,
  left?: string,
};

interface Data {
  currentOffset: number;
};

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: "main",
    },
    adjacent: {
      type: Object as PropType<Adjacent>,
      default: {
        top: null,
        right: null,
        bottom: null,
        left: null,
      },
    },
    dragFactor: {
      type: Number,
      default: 0.5,
      validator: (val: number) => val > 0 && val <= 1,
    },
  },

  data (): Data {
    return {
      currentOffset: 0,
    };
  },

  computed: {
    overflowRatio (): number {
      return (this.$refs.slideScreen as HTMLElement).scrollWidth / (this.$refs.slideScreen as HTMLElement).offsetWidth;
    },
  },

  methods: {
    onPan ({ deltaX, deltaY, isFinal }: any) {
      const maxDragWidth = window.innerWidth <= 640 ? window.innerWidth : 640;
      const dragOffset = 100 * deltaX / window.innerWidth;
      const transform = this.currentOffset + dragOffset;

      let finalOffset = this.currentOffset;

      /**
       * Bounce back animation
       */
      const bounceBack = () => {
        TweenMax.fromTo(
          (this.$refs.slideScreen as HTMLElement),
          0.4,
          { "--x": this.currentOffset },
          {
            "--x": finalOffset,
            ease: Elastic.easeOut.config(1, 0.8),
            onComplete: () => {
              this.currentOffset = finalOffset;
            },
          },
        );
      };

      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        bounceBack();
        return;
      }

      (this.$refs.slideScreen as HTMLElement).style.setProperty("--x", transform.toString());

      if (isFinal) {
        this.currentOffset = transform;

        const maxScroll = 100 - this.overflowRatio * 100;

        if (this.currentOffset <= maxScroll) {
          finalOffset = maxScroll;
        } else if (this.currentOffset >= 0) {
          finalOffset = 0;
        }

        if (Math.abs(deltaX) > maxDragWidth * this.dragFactor) {
          if (this.adjacent.left && deltaX > 50) {
            this.$router.push(this.localePath(this.adjacent.left));
          }

          if (this.adjacent.right && deltaX < -50) {
            this.$router.push(this.localePath(this.adjacent.right));
          }
        }

        bounceBack();
      }
    },
  },
});
</script>

<style lang="postcss" scoped>
.slide-screen {
  @apply overflow-x-hidden select-none;

  transform: translateX(calc(var(--x, 0) * 1%));
  scroll-behavior: smooth;
}
</style>
