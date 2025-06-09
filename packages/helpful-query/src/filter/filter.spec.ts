import { describe, expect, it } from "vitest";
import { ZFilterBinaryBuilder, isBinaryFilter } from "./filter-binary.mjs";
import {
  ZFilterCollectionBuilder,
  isCollectionFilter,
} from "./filter-collection.mjs";
import { ZFilterLogicBuilder, isLogicFilter } from "./filter-logic.mjs";
import type { IZFilterMetadata } from "./filter-subject.mjs";
import { ZFilterUnaryBuilder, isUnaryFilter } from "./filter-unary.mjs";

describe("Filter", () => {
  function assertIsFilter<T extends IZFilterMetadata, G>(
    createTestTarget: () => T,
    isFilter: (t: T) => G,
  ) {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const actual = isFilter(target);
    // Assert.
    expect(actual).toBeTruthy();
  }

  describe("Binary", () => {
    it("should be classified if the __type__ is binary", () => {
      assertIsFilter(() => new ZFilterBinaryBuilder().build(), isBinaryFilter);
    });
  });

  describe("Unary", () => {
    it("should be classified if the __type__ is unary", () => {
      assertIsFilter(() => new ZFilterUnaryBuilder().build(), isUnaryFilter);
    });
  });

  describe("Collection", () => {
    it("should be classified if the __type__ is collection", () => {
      assertIsFilter(
        () => new ZFilterCollectionBuilder().build(),
        isCollectionFilter,
      );
    });
  });

  describe("Logic", () => {
    it("should be classified if the __type__ is logic", () => {
      assertIsFilter(() => new ZFilterLogicBuilder().build(), isLogicFilter);
    });
  });
});
