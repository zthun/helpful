import { ZCircusDestroy, type IZCircusSetup } from "@zthun/cirque";
import type { IZCircusReactHook } from "@zthun/cirque-du-react";
import { ZCircusSetupHook } from "@zthun/cirque-du-react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { useStateAsArray } from "./use-state-as-array.mjs";

describe("useStateAsArray", () => {
  const batman = "batman";
  const superman = "superman";
  let initial: string | string[] | undefined;
  let _hook: IZCircusReactHook<any, any>;
  let _setup: IZCircusSetup<IZCircusReactHook<any, any>>;

  const createTestTarget = async () => {
    _setup = new ZCircusSetupHook(() => useStateAsArray<string>(initial));
    _hook = await _setup.setup();
    return _hook;
  };

  beforeEach(() => {
    initial = undefined;
  });

  afterEach(() => ZCircusDestroy.sequential(_hook, _setup));

  describe("Initial", () => {
    it("should set the initial value", async () => {
      // Arrange.
      initial = "batman";
      const target = await createTestTarget();
      // Act.
      const [actual] = await target.current();
      // Assert.
      expect(actual).toEqual([initial]);
    });

    it("should be an empty array with no initial value", async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const [actual] = await target.current();
      // Assert.
      expect(actual).toEqual([]);
    });
  });

  describe("Single value", () => {
    it("should update with an array of one item", async () => {
      // Arrange.
      const target = await createTestTarget();
      const [, setValue] = await target.current();
      // Act.
      setValue(batman);
      const [actual] = await target.rerender();
      // Assert.
      expect(actual).toEqual([batman]);
    });

    it("should set the value as an array on a reducer", async () => {
      // Arrange.
      const target = await createTestTarget();
      const [, setValue] = await target.current();
      // Act.
      setValue(() => superman);
      const [actual] = await target.rerender();
      // Assert.
      expect(actual).toEqual([superman]);
    });
  });

  describe("Array value", () => {
    it("should update with the array values", async () => {
      // Arrange.
      const expected = [batman, superman];
      const target = await createTestTarget();
      const [, setValue] = await target.current();
      // Act.
      setValue(expected);
      const [actual] = await target.rerender();
      // Assert.
      expect(actual).toEqual(expected);
    });

    it("should set the array value on a reducer", async () => {
      // Arrange.
      initial = batman;
      const expected = [batman, superman];
      const target = await createTestTarget();
      const [, setValue] = await target.current();
      // Act.
      setValue((s) => s.concat(superman));
      const [actual] = await target.rerender();
      // Assert.
      expect(actual).toEqual(expected);
    });
  });
});
