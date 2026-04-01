import { describe, expect, it } from "vitest";

import { countBuckets } from "./count-buckets.mjs";

describe("countBuckets", () => {
  it("should return Infinity if infinite items are provided", () => {
    expect(countBuckets(1, Infinity)).toEqual(Infinity);
  });

  it("should return Infinity if the box weight is 0", () => {
    expect(countBuckets(0, 100)).toEqual(Infinity);
  });

  it("should return max if the box weight is 0 and max is set.", () => {
    expect(countBuckets(0, 1000, undefined, 100)).toEqual(100);
  });

  it("should return Infinity if the box weight is negative", () => {
    expect(countBuckets(-1, 100)).toEqual(Infinity);
  });

  it("should return 0 if the total items are 0.", () => {
    expect(countBuckets(1, 0)).toEqual(0);
  });

  it("should return min if the total items are 0 and min is set.", () => {
    expect(countBuckets(1, 0, 1, 1000)).toEqual(1);
  });

  it("should return 0 if the total items are negative.", () => {
    expect(countBuckets(1, -1)).toEqual(0);
  });

  it("should return 1 if the weight is Infinity and total items is greater than 0", () => {
    expect(countBuckets(Infinity, 39093849384)).toEqual(1);
  });

  it("should return 0 if the weight is Infinity but the total items is 0", () => {
    expect(countBuckets(Infinity, 0)).toEqual(0);
  });

  it("should return the total number of boxes that fit the items if the items are equally divisible", () => {
    expect(countBuckets(10, 100)).toEqual(10);
  });

  it("should add an additional box if the total number of boxes is not equally divisible and have left overs", () => {
    expect(countBuckets(10, 107)).toEqual(11);
  });

  it("should return NaN if weight is NaN", () => {
    expect(countBuckets(NaN, 0)).toBeNaN();
  });

  it("should return NaN if items is NaN", () => {
    expect(countBuckets(Infinity, NaN)).toBeNaN();
  });
});
