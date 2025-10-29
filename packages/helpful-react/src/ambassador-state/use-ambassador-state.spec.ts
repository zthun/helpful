import { ZCircusDestroy, type IZCircusSetup } from "@zthun/cirque";
import type { IZCircusReactHook } from "@zthun/cirque-du-react";
import { ZCircusSetupHook } from "@zthun/cirque-du-react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { ZAmbassadorReducer } from "./use-ambassador-state.mjs";
import { useAmbassadorState } from "./use-ambassador-state.mjs";

describe("useAmbassadorState", () => {
  let current: string | undefined;
  let initial: string | undefined;
  let setCurrent: ((val: string) => void) | undefined;
  let _hook: IZCircusReactHook<any, any>;
  let _setup: IZCircusSetup<IZCircusReactHook<any, any>>;

  async function createTestTarget() {
    _setup = new ZCircusSetupHook(() =>
      useAmbassadorState(current, setCurrent, initial),
    );
    _hook = await _setup.setup();
    return _hook;
  }

  beforeEach(() => {
    current = undefined;
    initial = undefined;
    setCurrent = undefined;
  });

  afterEach(() => ZCircusDestroy.sequential(_hook, _setup));

  async function setValueAndRerender(
    expected: string | ZAmbassadorReducer<string>,
    target: IZCircusReactHook<
      [string | undefined, (val: string | ZAmbassadorReducer<string>) => void],
      any
    >,
  ) {
    const [, setVal] = await target.current();
    setVal(expected);
    return target.rerender();
  }

  describe("Props", () => {
    beforeEach(() => {
      current = "by-props";
      setCurrent = _setCurrent;
    });

    function _setCurrent(val: string) {
      current = val;
    }

    it("should return the prop value.", async () => {
      // Arrange
      const target = await createTestTarget();
      // Act
      const [val] = await target.current();
      // Assert
      expect(val).toEqual(current);
    });

    it("should set the prop value.", async () => {
      // Arrange.
      const target = await createTestTarget();
      const expected = "value-to-set";
      // Act.
      await setValueAndRerender(expected, target);
      // Assert.
      expect(current).toEqual(expected);
    });

    it("should set the prop value based on the current value.", async () => {
      // Arrange.
      const expected = "11";
      current = "1";
      const target = await createTestTarget();
      // Act.
      await setValueAndRerender((c) => c + "1", target);
      // Assert.
      expect(current).toEqual(expected);
    });
  });

  describe("State", () => {
    it("should set an initial value.", async () => {
      // Arrange
      initial = "initial";
      const target = await createTestTarget();
      // Act
      const [actual] = await target.current();
      // Assert
      expect(actual).toEqual(initial);
    });

    it("should set the internal state if the props are undefined.", async () => {
      // Arrange
      const target = await createTestTarget();
      const expected = "updated-value";
      // Act
      const [actual] = await setValueAndRerender(expected, target);
      // Assert
      expect(actual).toEqual(expected);
    });
  });
});
