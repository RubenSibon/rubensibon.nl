import Vue from "vue";
import Hammer from "hammerjs";

/*
* Panning
*/
Vue.directive("pan", {
  bind (el, binding) {
    if (typeof binding.value === "function") {
      const mc = new Hammer(el);

      mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });

      mc.on("pan", binding.value);
    }
  },
});

/*
 * Swiping
 */
Vue.directive("swipe", {
  bind (el, binding) {
    if (typeof binding.value === "function") {
      const mc = new Hammer(el);

      mc.get("swipe").set({ direction: Hammer.DIRECTION_HORIZONTAL });

      mc.on("swipe", binding.value);
    }
  },
});

/*
 * Tapping
 */
Vue.directive("tap", {
  bind (el, binding) {
    if (typeof binding.value === "function") {
      const mc = new Hammer(el);

      mc.on("tap", binding.value);
    }
  },
});
