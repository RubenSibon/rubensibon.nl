const testUtils = require("@vue/test-utils");
const Button = import("@/components/Button.vue");

describe("Button", () => {
  test("is a Vue instance", () => {
    const wrapper = testUtils.mount(Button);
    expect(wrapper.vm).toBeTruthy();
  });
});
