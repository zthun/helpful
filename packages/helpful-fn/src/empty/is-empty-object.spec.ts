import { describe, expect, it } from "vitest";

import { isEmptyObject } from "./is-empty-object.mjs";

describe("isEmptyObject", () => {
  it("should return true for an empty object", () => {
    expect(isEmptyObject({})).toBeTruthy();
  });

  it("should return true for null", () => {
    expect(isEmptyObject(null)).toBeTruthy();
  });

  it("should return true for undefined", () => {
    expect(isEmptyObject(undefined)).toBeTruthy();
  });

  it("should return false for an object with 1 or more keys", () => {
    expect(isEmptyObject({ a: null })).toBeFalsy();
  });

  it("should return false for a non object", () => {
    expect(isEmptyObject("")).toBeFalsy();
  });
});
