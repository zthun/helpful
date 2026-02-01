import { describe, expect, it } from "vitest";
import { tryJsonParse } from "./try-json-parse.mjs";

describe("tryJsonParse", () => {
  it("should return null for null", () => {
    expect(tryJsonParse(null)).toBeNull();
  });

  it("should return null for undefined", () => {
    expect(tryJsonParse(undefined)).toBeNull();
  });

  it("should return null for binary data", () => {
    expect(
      tryJsonParse(Buffer.from([0x35, 0x36]).toString("utf-8")),
    ).toBeNull();
  });

  it("should return null for bad json", () => {
    expect(tryJsonParse("[not-valid-json]")).toBeNull();
  });

  it("should return the parsed value of the json string", () => {
    const expected = { a: 1, b: 2 };
    expect(tryJsonParse(JSON.stringify(expected))).toEqual(expected);
  });

  it("should return the fallback if the value cannot be parsed", () => {
    const expected = "fallback";
    expect(tryJsonParse("not-json", expected)).toEqual(expected);
  });
});
