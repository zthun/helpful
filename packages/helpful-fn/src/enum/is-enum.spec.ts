import { describe, expect, it } from "vitest";
import { isEnum } from "./is-enum.mjs";

enum StringEnum {
  One = "one",
  Two = "two",
}

enum NumberEnum {
  One = 2,
  Two = 3,
}

enum AutoEnum {
  One,
  Two,
}

describe("isEnum", () => {
  it("should be false for null", () => {
    expect(isEnum(AutoEnum, null)).toBeFalsy();
  });

  it("should be false for undefined", () => {
    expect(isEnum(AutoEnum, undefined)).toBeFalsy();
  });

  it("should be false for bigint", () => {
    expect(isEnum(NumberEnum, 2n)).toBeFalsy();
  });

  it("should be false for functions", () => {
    expect(isEnum(StringEnum, () => StringEnum.One)).toBeFalsy();
  });

  it("should be false for symbols", () => {
    expect(isEnum(AutoEnum, Symbol("One"))).toBeFalsy();
  });

  it("should be false for booleans", () => {
    expect(isEnum(AutoEnum, true)).toBeFalsy();
  });

  it("should be false for objects", () => {
    expect(isEnum(AutoEnum, { foo: { bar: "baz" } })).toBeFalsy();
  });

  describe("String", () => {
    it("should be true for values that are in the enum value list", () => {
      expect(isEnum(StringEnum, StringEnum.Two)).toBeTruthy();
    });

    it("should be false for values that are not in the enum value list", () => {
      expect(isEnum(StringEnum, "three-hundred")).toBeFalsy();
    });
  });

  describe("Number", () => {
    it("should be true for values that are in the enum value list", () => {
      expect(isEnum(NumberEnum, NumberEnum.Two)).toBeTruthy();
    });

    it("should be false for values that are not in the enum value list", () => {
      expect(isEnum(NumberEnum, 3024)).toBeFalsy();
    });

    it("should be true for keys as well as values", () => {
      expect(isEnum(NumberEnum, "One")).toBeTruthy();
    });
  });
});
