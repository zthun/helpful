import { describe, expect, it } from "vitest";
import { castExtension } from "./cast-extension.mjs";

describe("Cast Extension", () => {
  it("should return the empty string for undefined", () => {
    expect(castExtension(undefined)).toEqual("");
  });

  it("should return the empty string for null", () => {
    expect(castExtension(null)).toEqual("");
  });

  it("should return the empty string for the empty string", () => {
    expect(castExtension("")).toEqual("");
  });

  it("should return the empty string for white space", () => {
    expect(castExtension("\r\n \t")).toEqual("");
  });

  it("should return the empty string for all dots", () => {
    expect(castExtension("........")).toEqual("");
  });

  it("should return an extension if the candidate is already an extension", () => {
    expect(castExtension(".zip")).toEqual(".zip");
  });

  it("should add the dot operator if one does not exist", () => {
    expect(castExtension("zip")).toEqual(".zip");
  });

  it("should keep only one dot", () => {
    expect(castExtension(".....zip")).toEqual(".zip");
  });
});
