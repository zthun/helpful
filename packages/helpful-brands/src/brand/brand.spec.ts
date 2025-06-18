import { describe, expect, it } from "vitest";
import { ZBrandKnown } from "./brand-known.mjs";
import { ZBrandMetadata } from "./brand-metadata.mjs";

describe("ZBrand", () => {
  it("should construct all brands", () => {
    // Arrange.

    // Act.
    const brands = ZBrandKnown.all();

    // Assert.
    expect(brands.length).toBeGreaterThan(0);
  });

  it("should construct all brand metadata", () => {
    // Arrange.

    // Act.
    const meta = ZBrandMetadata.all();

    // Assert.
    expect(meta.length).toBeGreaterThan(0);
  });
});
