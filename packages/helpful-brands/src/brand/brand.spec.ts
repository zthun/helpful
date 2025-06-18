import { describe, expect, it } from "vitest";
import { ZBrandKnown } from "./brand-known.mjs";

describe("ZBrand", () => {
  it("should construct all brands", () => {
    // Arrange.

    // Act.
    const brands = ZBrandKnown.all();

    // Assert.
    expect(brands.length).toBeGreaterThan(0);
  });
});
