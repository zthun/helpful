import { describe, expect, it } from "vitest";

import { purge } from "./purge.mjs";

describe("purge", () => {
  it("should remove a property if it is undefined", () => {
    // Arrange.
    const target = { prop: undefined };

    // Act.
    purge(target, "prop");
    const actual = Object.keys(target);

    // Assert.
    expect(actual).toHaveLength(0);
  });

  it("should keep the property if it is null", () => {
    // Arrange.
    const target = { prop: null };

    // Act.
    purge(target, "prop");

    // Assert.
    expect(target.prop).toBeNull();
  });

  it("should keep the property if it is not undefined", () => {
    // Arrange.
    const expected = "ok";
    const target = { prop: expected };

    // Act.
    purge(target, "prop");

    // Assert.
    expect(target.prop).toEqual(expected);
  });
});
