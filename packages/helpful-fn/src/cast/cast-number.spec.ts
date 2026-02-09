import { describe, expect, it } from "vitest";
import { castNumber } from "./cast-number.mjs";

describe("CastNumber", () => {
  it("should return the casted number from a number", () => {
    const e = 134;
    expect(castNumber(e)).toEqual(e);
  });

  it("should return the casted number from a string", () => {
    const e = 1566;
    expect(castNumber(e.toString())).toEqual(e);
  });

  it("should return the casted number from a bigint", () => {
    const e = 1024;
    expect(castNumber(1024n)).toEqual(e);
  });

  it("should return the fallback in the case that casting the candidate results in NaN", () => {
    expect(castNumber("not-a-number", 0)).toEqual(0);
  });

  it("should return the fallback if the candidate is not a number", () => {
    expect(castNumber(NaN)).toBeUndefined();
  });

  it("should return the fallback for undefined", () => {
    expect(castNumber(undefined, 0)).toEqual(0);
  });

  it("should return the fallback for null", () => {
    expect(castNumber(null, 0)).toEqual(0);
  });

  it("should return the fallback for a symbol", () => {
    expect(castNumber(Symbol(), 0)).toEqual(0);
  });
});
