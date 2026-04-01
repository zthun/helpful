import { describe, expect, it } from "vitest";

import { ZFilterBinaryBuilder, ZOperatorBinary } from "./filter-binary.mjs";

describe("Binary Filter", () => {
  function createTestTarget() {
    return new ZFilterBinaryBuilder();
  }

  it("sets the field.", () => {
    const expected = "field";
    expect(createTestTarget().subject(expected).build().subject).toEqual(
      expected,
    );
  });

  it("sets the value.", () => {
    const expected = "value";
    expect(createTestTarget().value(expected).build().value).toEqual(expected);
  });

  it("sets the operator to equal.", () => {
    expect(createTestTarget().equal().build().operator).toEqual(
      ZOperatorBinary.Equal,
    );
  });

  it("sets the operator to not equal.", () => {
    expect(createTestTarget().notEqual().build().operator).toEqual(
      ZOperatorBinary.NotEqual,
    );
  });

  it("sets the operator to greater than.", () => {
    expect(createTestTarget().greaterThan().build().operator).toEqual(
      ZOperatorBinary.GreaterThan,
    );
  });

  it("sets the operator to greater than equal to.", () => {
    expect(createTestTarget().greaterThanEqualTo().build().operator).toEqual(
      ZOperatorBinary.GreaterThanEqualTo,
    );
  });

  it("sets the operator to less than.", () => {
    expect(createTestTarget().lessThan().build().operator).toEqual(
      ZOperatorBinary.LessThan,
    );
  });

  it("sets the operator to less than equal to.", () => {
    expect(createTestTarget().lessThanEqualTo().build().operator).toEqual(
      ZOperatorBinary.LessThanEqualTo,
    );
  });

  it("sets the operator to like.", () => {
    expect(createTestTarget().like().build().operator).toEqual(
      ZOperatorBinary.Like,
    );
  });
});
