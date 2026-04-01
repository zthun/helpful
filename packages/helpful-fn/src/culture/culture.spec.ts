import { describe, expect, it } from "vitest";

import { culture, cultures } from "./culture.mjs";

describe("Culture", () => {
  it("should return the current node locale", () => {
    expect(culture()).toBeTruthy();
  });

  it("should return all supported cultures", () => {
    expect(cultures().length).toBeGreaterThan(0);
  });
});
