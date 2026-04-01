import { type IZCircusSetup, ZCircusDestroy } from "@zthun/cirque";
import type { IZCircusReactHook } from "@zthun/cirque-du-react";
import { ZCircusSetupHook } from "@zthun/cirque-du-react";
import type { Dispatch, SetStateAction } from "react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { useSyncState } from "./use-sync-state.mjs";

type StateTuple<T> = [T, Dispatch<SetStateAction<T>>];

describe("useSyncState", () => {
  let _initial: string;
  let _factory: IZCircusSetup<IZCircusReactHook<StateTuple<string>, unknown>>;
  let _hook: IZCircusReactHook<StateTuple<string>, unknown>;

  const createTestTarget = async () => {
    _factory = new ZCircusSetupHook(() => useSyncState(_initial));
    _hook = await _factory.setup();

    return _hook;
  };

  beforeEach(() => {
    _initial = "";
  });

  afterEach(() => ZCircusDestroy.sequential(_hook, _factory));

  it("should update the internal state when the initial value changes", async () => {
    // Arrange.
    const first = "first";
    const second = "second";
    _initial = first;
    const hook = await createTestTarget();
    const [, setValue] = await hook.current();

    // Act.
    setValue("some value that should be overrode");
    await hook.rerender();
    _initial = second;
    const [actual] = await _hook.rerender();

    // Assert.
    expect(actual).toEqual(second);
  });

  it("should update the internal state as long as the initial state does not change", async () => {
    // Arrange.
    const first = "first";
    const second = "second";
    _initial = first;
    const hook = await createTestTarget();
    const [, setValue] = await hook.current();

    // Act.
    setValue(second);
    const [actual] = await hook.rerender();

    // Assert.
    expect(actual).toEqual(second);
  });
});
