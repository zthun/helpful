import { describe, expect, it } from "vitest";

import { ZFilterUnaryBuilder, ZOperatorUnary } from "./filter-unary.mjs";

describe("Unary Filter", () => {
  function createTestTarget() {
    return new ZFilterUnaryBuilder();
  }

  it("sets the field.", () => {
    const expected = "field";
    expect(createTestTarget().subject(expected).build().subject).toEqual(
      expected,
    );
  });

  it("sets the operator to is null.", () => {
    expect(createTestTarget().subject("a").isNull().build().operator).toEqual(
      ZOperatorUnary.IsNull,
    );
  });

  it("sets the operator to is not null.", () => {
    expect(
      createTestTarget().subject("a").isNotNull().build().operator,
    ).toEqual(ZOperatorUnary.IsNotNull);
  });
});
