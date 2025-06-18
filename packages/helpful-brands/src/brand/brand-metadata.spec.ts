import { describe, expect, it } from "vitest";
import { ZBrandMetadata } from "./brand-metadata.mjs";

describe("ZBrandMetadata", () => {
  it("should construct all brand metadata", () => {
    // Arrange.

    // Act.
    const meta = ZBrandMetadata.all();

    // Assert.
    expect(meta.length).toBeGreaterThan(0);
  });
});
