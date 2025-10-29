import type { IZCircusSetup } from "@zthun/cirque";
import { ZCircusDestroy, ZCircusKeyboardQwerty } from "@zthun/cirque";
import type { IZCircusReactHook } from "@zthun/cirque-du-react";
import { ZCircusSetupHook } from "@zthun/cirque-du-react";
import type { KeyboardEvent } from "react";
import type { Mock } from "vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useKeyboardActivate } from "./use-keyboard-activate.mjs";

describe("useKeyboardActivate", () => {
  let callback: Mock | undefined;
  let codes: string[] | undefined;
  let _hook: IZCircusReactHook<any, any>;
  let _setup: IZCircusSetup<IZCircusReactHook<any, any>>;

  async function createTestTarget() {
    _setup = new ZCircusSetupHook(() => useKeyboardActivate(callback, codes));
    _hook = await _setup.setup();
    return _hook;
  }

  beforeEach(() => {
    callback = undefined;
    codes = undefined;
  });

  afterEach(() => ZCircusDestroy.sequential(_hook, _setup));

  describe("With", () => {
    beforeEach(() => {
      callback = vi.fn();
    });

    async function shouldInvokeCallbackWhenAKeyIsPressed(code: string) {
      // Arrange.
      const e = { code } as KeyboardEvent<Element>;
      const target = await createTestTarget();
      // Act.
      const { onKey } = await target.current();
      onKey!(e);
      // Assert.
      expect(callback).toHaveBeenCalledWith(e);
    }

    it("should invoke the callback handler when Enter is pressed", async () => {
      await shouldInvokeCallbackWhenAKeyIsPressed(
        ZCircusKeyboardQwerty.enter.code,
      );
    });

    it("should invoke the callback handler when Space is pressed.", async () => {
      await shouldInvokeCallbackWhenAKeyIsPressed(
        ZCircusKeyboardQwerty.space.code,
      );
    });

    it("should invoke the callback handler when a specific key is pressed.", async () => {
      codes = [ZCircusKeyboardQwerty.comma.code];
      await shouldInvokeCallbackWhenAKeyIsPressed(
        ZCircusKeyboardQwerty.comma.code,
      );
    });

    it("should not invoke the callback if a key is pressed that is not in the list of codes.", async () => {
      // Arrange.
      const e = {
        code: ZCircusKeyboardQwerty.altLeft.code,
      } as KeyboardEvent<Element>;
      const target = await createTestTarget();
      // Act.
      const { onKey } = await target.current();
      onKey!(e);
      // Assert.
      expect(callback).not.toHaveBeenCalled();
    });

    it("should return 0 for the tabIndex", async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { tabIndex } = await target.current();
      // Assert.
      expect(tabIndex).toEqual(0);
    });
  });

  describe("Without", () => {
    it("should return undefined for the tabIndex.", async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { tabIndex } = await target.current();
      // Assert.
      expect(tabIndex).toBeUndefined();
    });

    it("should return undefined for the onKey proxy.", async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { onKey } = await target.current();
      // Assert.
      expect(onKey).toBeUndefined();
    });
  });
});
