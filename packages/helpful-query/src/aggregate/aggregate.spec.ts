import { describe, expect, it } from "vitest";
import { ZAggregateBuilder } from "./aggregate.mjs";

describe("ZAggregate", () => {
  function createTestTarget() {
    return new ZAggregateBuilder();
  }

  describe("Id", () => {
    it("should set the value", () => {
      const expected = "average";
      expect(createTestTarget().id(expected).build().id).toEqual(expected);
    });
  });

  describe("Value", () => {
    it("should set the value", () => {
      const expected = 500;
      expect(
        createTestTarget().id("whatever").value(expected).build().value,
      ).toEqual(expected);
    });
  });

  describe("Count", () => {
    it('should set the id to "count"', () => {
      expect(createTestTarget().count(50).build().id).toEqual("count");
    });

    it("should set the value to the given number", () => {
      const expected = 1022;
      expect(createTestTarget().count(expected).build().value).toEqual(
        expected,
      );
    });
  });
});
