import { describe, expect, it } from "vitest";
import { gib, kib, mib, pib, tib } from "./file-size.mjs";

describe("Bytes", () => {
  describe("kib", () => {
    it("should return the total number of bytes", () => {
      expect(kib(5)).toEqual(5120);
    });
  });

  describe("mib", () => {
    it("should return the total number of bytes", () => {
      expect(mib(5.67)).toEqual(5945426);
    });
  });

  describe("gib", () => {
    it("should return the total number of bytes", () => {
      expect(gib(5)).toEqual(5368709120);
    });
  });

  describe("tib", () => {
    it("should return the total number of bytes", () => {
      expect(tib(5)).toEqual(5497558138880);
    });
  });

  describe("pib", () => {
    it("should return the total number of bytes", () => {
      expect(pib(5)).toEqual(5629499534213120);
    });
  });
});
