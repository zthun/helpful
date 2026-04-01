import { describe, expect, it } from "vitest";

import { ZLazy } from "./lazy.mjs";

describe("ZLazy", () => {
  const value = "Lazy loaded value";

  const createTestTarget = () => new ZLazy(() => Promise.resolve(value));

  it("should not be initialized upon construction", () => {
    // Arrange.
    const target = createTestTarget();

    // Act.
    const actual = target.initialized();

    // Assert.
    expect(actual).toBeFalsy();
  });

  it("should be initialized after calling get for the first time", async () => {
    // Arrange.
    const target = createTestTarget();

    // Act.
    await target.get();
    const actual = target.initialized();

    // Assert.
    expect(actual).toBeTruthy();
  });

  it("should return the constructed value after initialization", async () => {
    // Arrange.
    const target = createTestTarget();

    // Act.
    const actual = await target.get();

    // Assert.
    expect(actual).toEqual(value);
  });

  it("should return the same value when retrieved more than once", async () => {
    // Arrange.
    const target = createTestTarget();

    // Act.
    const left = await target.get();
    const right = await target.get();

    // Assert.
    expect(left).toEqual(right);
  });
});
