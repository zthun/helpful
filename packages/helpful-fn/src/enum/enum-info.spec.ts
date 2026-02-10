import { describe, expect, it } from "vitest";
import { ZVerticalAnchor } from "../index.mjs";
import { ZEnumInfoBuilder } from "./enum-info.mjs";

describe("Enum Information", () => {
  const createTestTarget = () => new ZEnumInfoBuilder(ZVerticalAnchor.Bottom);

  describe("Value", () => {
    it("should initialize in the constructor", () => {
      expect(createTestTarget().build().value).toEqual(ZVerticalAnchor.Bottom);
    });
  });

  describe("Name", () => {
    it("should set the value", () => {
      expect(createTestTarget().name("Bottom").build().name).toEqual("Bottom");
    });
  });

  describe("Description", () => {
    it("should set the value", () => {
      const expected = "Bottom anchor";
      expect(
        createTestTarget().description(expected).build().description,
      ).toEqual(expected);
    });
  });

  describe("Avatar", () => {
    it("should set the value", () => {
      const expected = "bottom anchor";
      expect(createTestTarget().avatar(expected).build().avatar).toEqual(
        expected,
      );
    });
  });
});
