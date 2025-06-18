import { ZDataRequestBuilder, ZSortBuilder } from "@zthun/helpful-query";
import { findIndex } from "lodash-es";
import { describe, expect, it } from "vitest";
import { ZBrandDataSourceFactory } from "./brand-data-source-factory.mjs";
import { ZBrandKnown } from "./brand-known.mjs";

describe("ZBrandMetadata", () => {
  const createTestTarget = () => ZBrandDataSourceFactory.create();

  describe("Search", () => {
    it("should search by name", async () => {
      // Arrange.
      const wanted = ZBrandKnown.facebook();
      const target = createTestTarget();
      const search = "face";
      const request = new ZDataRequestBuilder().search(search).build();

      // Act.
      const brands = await target.retrieve(request);
      const index = findIndex(brands, (b) => b.id === wanted.id);

      // assert.
      expect(index).toBeGreaterThanOrEqual(0);
    });

    it("should search by owner", async () => {
      // Arrange.
      const wanted = ZBrandKnown.google();
      const target = createTestTarget();
      const search = "alphaBet";
      const request = new ZDataRequestBuilder().search(search).build();

      // Act.
      const brands = await target.retrieve(request);
      const index = findIndex(brands, (b) => b.id === wanted.id);

      // assert.
      expect(index).toBeGreaterThanOrEqual(0);
    });
  });

  it("should return the second page of brands from the brand list", async () => {
    // Arrange.
    let expected = ZBrandKnown.all();
    expected.sort((x, y) => x.name.localeCompare(y.name));
    expected = expected.slice(5, 10);

    const target = createTestTarget();
    const byName = new ZSortBuilder().ascending("name").build();
    const request = new ZDataRequestBuilder()
      .sort(byName)
      .page(2)
      .size(5)
      .build();

    // Act.
    const actual = await target.retrieve(request);

    // Assert.
    expect(actual).toEqual(expected);
  });
});
