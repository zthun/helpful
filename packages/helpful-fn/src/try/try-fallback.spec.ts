import { describe, expect, it } from "vitest";
import { createGuid } from "../create-guid/create-guid.mjs";
import { tryFallback, tryFallbackAsync } from "./try-fallback.mjs";

const fail = () => {
  throw new Error("Failed");
};

describe("Try With Fallback", () => {
  describe("Sync", () => {
    it("should return the value", () => {
      // Arrange.
      const expected = createGuid();
      // Act.
      const actual = tryFallback(() => expected);
      // Assert.
      expect(actual).toEqual(expected);
    });

    it("should return undefined if an error is thrown", () => {
      // Arrange.
      // Act.
      const actual = tryFallback(fail);
      // Assert.
      expect(actual).toBeUndefined();
    });

    it("should return fallback if an error is thrown", async () => {
      // Arrange.
      const expected = createGuid();
      // Act.
      const actual = tryFallback(fail, expected);
      // Assert.
      expect(actual).toEqual(expected);
    });
  });

  describe("Async", () => {
    it("should return the value", async () => {
      // Arrange.
      const expected = createGuid();
      // Act.
      const actual = await tryFallbackAsync(() => Promise.resolve(expected));
      // Assert.
      expect(actual).toEqual(expected);
    });

    it("should return undefined if a rejected promise is returned", async () => {
      // Arrange.
      // Act.
      const actual = await tryFallbackAsync<string>(() =>
        Promise.reject(new Error("Failed")),
      );
      // Assert.
      expect(actual).toBeUndefined();
    });

    it("should return fallback if a rejected promise is returned", async () => {
      // Arrange.
      const expected = createGuid();
      // Act.
      const actual = await tryFallbackAsync<string>(
        () => Promise.reject(new Error("Failed")),
        expected,
      );
      // Assert.
      expect(actual).toEqual(expected);
    });
  });
});
