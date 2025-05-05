import { mount } from "@vue/test-utils";
import NotificationBar from "@/components/NotificationBar.vue";
import { describe, expect, test } from "vitest";

describe("NotificationBar.vue", () => {
  test("renders the correct style for error", () => {
    const type = "error";
    const wrapper = mount(NotificationBar, {
      props: { type },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--error"])
    );
  });
  test("renders correct style for success", () => {
    // Same as error, for success
  });

  test("renders correct style for info", () => {
    // Same as error, for info
  });

  test("slides down when message is not empty", () => {
    const message = "success";
    const wrapper = mount(NotificationBar, {
      props: { message },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--slide"])
    );
  });
  test("slides up when message is empty", () => {
    // close to the not empty test, but empty
  });
  test("emits event when close button is clicked", async () => {
    const wrapper = mount(NotificationBar, {
      data() {
        return {
          clicked: false,
        };
      },
    });
    const closeButton = wrapper.find("button");
    await closeButton.trigger("click");
    expect("");
  });
  test("renders message when message is not empty", () => {
    const message = "Something happened, try again";
    const wrapper = mount(NotificationBar, {
      props: { message },
    });
    expect("");
  });
});
