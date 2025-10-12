import { describe, expect, it } from "vitest";
import { ZPageBuilder } from "./page.mjs";

describe("ZPage", () => {
  const createTestTarget = () => new ZPageBuilder();

  describe("Empty", () => {
    it("should set the count to 0", () => {
      expect(createTestTarget().all([1, 2, 3]).empty().build().count).toEqual(
        0,
      );
    });

    it("should set the data to the empty array", () => {
      expect(createTestTarget().all([1, 2, 3]).empty().build().data).toEqual(
        [],
      );
    });
  });

  describe("Singleton", () => {
    it("should set the count to 1", () => {
      expect(createTestTarget().singleton(1).build().count).toEqual(1);
    });

    it("should set the data to the empty array", () => {
      expect(createTestTarget().singleton(1).build().data).toEqual([1]);
    });
  });

  describe("All", () => {
    it("should set the count to the data length", () => {
      expect(createTestTarget().all([1, 2, 3]).build().count).toEqual(3);
    });

    it("should set the data to the single page data array", () => {
      expect(createTestTarget().all([1, 2, 3]).build().data).toEqual([1, 2, 3]);
    });
  });

  describe("Copy", () => {
    it("should copy another instance", () => {
      const a = createTestTarget().data([4, 5, 6]).count(10).build();
      const b = createTestTarget().copy(a).build();
      expect(a).toEqual(b);
    });
  });
});
