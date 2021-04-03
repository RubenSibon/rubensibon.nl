<template>
  <main
    ref="main"
    v-pan="onPan"
    class="main"
  >
    <slot />
  </main>
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
    adjacent: {
      type: Object as PropType<Adjacent>,
      default: {
        top: null,
        right: null,
        bottom: null,
        left: null,
      },
    },
  },

  data (): Data {
    return {
      currentOffset: 0,
    };
  },

  computed: {
    overflowRatio (): number {
      return (this.$refs.main as HTMLElement).scrollWidth / (this.$refs.main as HTMLElement).offsetWidth;
    },
  },

  methods: {
    onPan (event: any) {
      const vpWidth = window.innerWidth;
      const dragOffset = 100 * event.deltaX / window.innerWidth;
      const transform = this.currentOffset + dragOffset;

      if (Math.abs(event.deltaX) > 50) {
        (this.$refs.main as HTMLElement).style.setProperty("--x", transform.toString());
      } else {
        return;
      }

      if (event.isFinal) {
        this.currentOffset = transform;

        const maxScroll = 100 - this.overflowRatio * 100;
        let finalOffset = this.currentOffset;

        if (this.currentOffset <= maxScroll) {
          finalOffset = maxScroll;
        } else if (this.currentOffset >= 0) {
          finalOffset = 0;
        }

        // Bounce back animation
        TweenMax.fromTo(
          (this.$refs.main as HTMLElement),
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

        if (Math.abs(event.deltaX) > vpWidth * 0.4) {
          if (this.adjacent.left && event.deltaX > 0) {
            this.$router.push(this.localePath(this.adjacent.left));
          }

          if (this.adjacent.right && event.deltaX < 0) {
            this.$router.push(this.localePath(this.adjacent.right));
          }
        }
      }
    },
  },
});
</script>

<style lang="postcss" scoped>
.main {
  transform: translateX(calc(var(--x, 0) * 1%));
}
</style>
