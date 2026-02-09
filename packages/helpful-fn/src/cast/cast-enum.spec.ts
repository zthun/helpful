import { describe, expect, it } from "vitest";
import { ZCalendarMonth } from "../date/calendar-month.mjs";
import { castEnum } from "./cast-enum.mjs";

describe("CastEnum", () => {
  it("should return the casted value from the containing enum", () => {
    expect(castEnum(ZCalendarMonth, ZCalendarMonth.October)).toEqual(
      ZCalendarMonth.October,
    );
  });

  it("should return the fallback if the value is not an enum value", () => {
    expect(castEnum(ZCalendarMonth, "Aug", ZCalendarMonth.September)).toEqual(
      ZCalendarMonth.September,
    );
  });

  it("should return the fallback for a bigint", () => {
    expect(castEnum(ZCalendarMonth, 2n, ZCalendarMonth.July)).toEqual(
      ZCalendarMonth.July,
    );
  });

  it("should return the fallback for undefined", () => {
    expect(castEnum(ZCalendarMonth, undefined, ZCalendarMonth.May)).toEqual(
      ZCalendarMonth.May,
    );
  });

  it("should return the fallback for null", () => {
    expect(castEnum(ZCalendarMonth, null, ZCalendarMonth.May)).toEqual(
      ZCalendarMonth.May,
    );
  });

  it("should return the fallback for a symbol", () => {
    expect(castEnum(ZCalendarMonth, Symbol("May"), ZCalendarMonth.May)).toEqual(
      ZCalendarMonth.May,
    );
  });
});
