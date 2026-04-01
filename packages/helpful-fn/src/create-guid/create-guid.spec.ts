import { describe, expect, it } from "vitest";

import { createGuid } from "./create-guid.mjs";

describe("createGuid", () => {
  it("should return a new guid", () => {
    // Arrange.
    const a = createGuid();
    // Act.
    const b = createGuid();
    // Assert.
    expect(a).toBeTruthy();
    expect(b).toBeTruthy();
    expect(a).not.toEqual(b);
  });
});
