import { describe, expect, it } from "vitest";
import { isTagged, ZTag } from "./tag.js";

@ZTag("yellow")
class NumberFactory {
  @ZTag("red")
  public infinity = Infinity;

  @ZTag("black")
  public get three() {
    return 3;
  }

  @ZTag("green")
  @ZTag("orange")
  public zero() {
    return 0;
  }

  @ZTag("blue")
  public one() {
    return 1;
  }
}

describe("ZTag", () => {
  describe("Class", () => {
    it("should know it has a tag", () => {
      expect(isTagged("yellow", NumberFactory)).toBeTruthy();
    });

    it("should know it does not have a tag", () => {
      expect(isTagged("green", NumberFactory)).toBeFalsy();
    });
  });

  describe("Method", () => {
    it("should know it has a tag", () => {
      expect(isTagged("green", new NumberFactory(), "zero")).toBeTruthy();
    });

    it("should know it does not have a tag", () => {
      expect(isTagged("green", new NumberFactory(), "one")).toBeFalsy();
    });
  });

  describe("Property", () => {
    it("should know it has a tag", () => {
      expect(isTagged("red", new NumberFactory(), "infinity")).toBeTruthy();
    });

    it("should know it does not have a tag", () => {
      expect(isTagged("cyan", new NumberFactory(), "infinity")).toBeFalsy();
    });
  });

  describe("Accessor", () => {
    it("should know it has a tag", () => {
      expect(isTagged("black", new NumberFactory(), "three")).toBeTruthy();
    });

    it("should know it does not have a tag", () => {
      expect(isTagged("white", new NumberFactory(), "three")).toBeFalsy();
    });
  });

  describe("Other", () => {
    it("should not be tagged for null", () => {
      expect(isTagged("blue", null)).toBeFalsy();
    });

    it("should not be tagged for undefined", () => {
      expect(isTagged("blue", undefined)).toBeFalsy();
    });

    it("should not be tagged for intrinsic values", () => {
      expect(isTagged("green", "decorators-not-supported")).toBeFalsy();
    });

    it("should not be tagged for top level functions", () => {
      expect(isTagged("green", () => 0)).toBeFalsy();
    });
  });
});
