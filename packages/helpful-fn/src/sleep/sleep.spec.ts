import { describe, expect, it } from "vitest";

import { sleep } from "./sleep.mjs";

describe("Sleep", () => {
  it("should resolve almost immediately.", async () => {
    await expect(sleep()).resolves.toBeUndefined();
  });

  it("should resolve after some time.", async () => {
    await expect(sleep(10)).resolves.toBeUndefined();
  });

  it("should resolve with the given value.", async () => {
    const expected = "value";
    await expect(sleep(1, expected)).resolves.toEqual(expected);
  });
});
