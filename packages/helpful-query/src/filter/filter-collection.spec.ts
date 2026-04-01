import { describe, expect, it } from "vitest";

import {
  ZFilterCollectionBuilder,
  ZOperatorCollection,
} from "./filter-collection.mjs";

describe("Collection Filter", () => {
  function createTestTarget() {
    return new ZFilterCollectionBuilder();
  }

  it("sets the field.", () => {
    const expected = "field";
    expect(createTestTarget().subject(expected).build().subject).toEqual(
      expected,
    );
  });

  it("sets the values.", () => {
    const expected = [1, 2, 3, 4];
    expect(createTestTarget().values(expected).build().values).toEqual(
      expected,
    );
  });

  it("incrementally adds values.", () => {
    const expected = [1, 2, 3, 4];
    expect(
      createTestTarget().value(1).value(2).value(3).value(4).build().values,
    ).toEqual(expected);
  });

  it("sets the operator to in.", () => {
    expect(createTestTarget().in().build().operator).toEqual(
      ZOperatorCollection.In,
    );
  });

  it("sets the operator to not in.", () => {
    expect(createTestTarget().notIn().build().operator).toEqual(
      ZOperatorCollection.NotIn,
    );
  });
});
