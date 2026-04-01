import { describe, expect, it } from "vitest";

import { ZVerticalAnchor } from "../anchor/anchor.mjs";
import { ZCalendarMonth } from "../date/calendar-month.mjs";
import { isEnum } from "./is-enum.mjs";

describe("isEnum", () => {
  it("should be false for null", () => {
    expect(isEnum(ZCalendarMonth, null)).toBeFalsy();
  });

  it("should be false for undefined", () => {
    expect(isEnum(ZCalendarMonth, undefined)).toBeFalsy();
  });

  it("should be false for bigint", () => {
    expect(isEnum(ZCalendarMonth, 2n)).toBeFalsy();
  });

  it("should be false for functions", () => {
    expect(isEnum(ZCalendarMonth, () => ZCalendarMonth.February)).toBeFalsy();
  });

  it("should be false for symbols", () => {
    expect(isEnum(ZCalendarMonth, Symbol("July"))).toBeFalsy();
  });

  it("should be false for booleans", () => {
    expect(isEnum(ZCalendarMonth, true)).toBeFalsy();
  });

  it("should be false for objects", () => {
    expect(isEnum(ZCalendarMonth, { foo: { bar: "baz" } })).toBeFalsy();
  });

  describe("String", () => {
    it("should be true for values that are in the enum value list", () => {
      expect(isEnum(ZVerticalAnchor, ZVerticalAnchor.Middle)).toBeTruthy();
    });

    it("should be false for values that are not in the enum value list", () => {
      expect(isEnum(ZVerticalAnchor, "half-upper-left")).toBeFalsy();
    });
  });

  describe("Number", () => {
    it("should be true for values that are in the enum value list", () => {
      expect(isEnum(ZCalendarMonth, ZCalendarMonth.April)).toBeTruthy();
    });

    it("should be false for values that are not in the enum value list", () => {
      expect(isEnum(ZCalendarMonth, "Jan")).toBeFalsy();
    });

    it("should be true for keys as well as values", () => {
      expect(isEnum(ZCalendarMonth, "February")).toBeTruthy();
    });
  });
});
