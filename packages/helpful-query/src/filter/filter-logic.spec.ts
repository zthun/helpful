import { beforeEach, describe, expect, it } from "vitest";

import type { IZFilter } from "./filter.mjs";
import { ZFilterBinaryBuilder } from "./filter-binary.mjs";
import { ZFilterCollectionBuilder } from "./filter-collection.mjs";
import { ZFilterLogicBuilder, ZOperatorLogic } from "./filter-logic.mjs";
import { ZFilterUnaryBuilder } from "./filter-unary.mjs";

describe("Logic Filter", () => {
  let clauseA: IZFilter;
  let clauseB: IZFilter;
  let clauseC: IZFilter;
  let clauseD: IZFilter;

  function createTestTarget() {
    return new ZFilterLogicBuilder();
  }

  beforeEach(() => {
    clauseA = new ZFilterBinaryBuilder()
      .subject("age")
      .greaterThan()
      .value(2)
      .build();
    clauseB = new ZFilterBinaryBuilder()
      .subject("age")
      .lessThan()
      .value(10)
      .build();
    clauseC = new ZFilterUnaryBuilder().subject("collection").isNull().build();
    clauseD = new ZFilterCollectionBuilder()
      .subject("state")
      .in()
      .value("Texas")
      .value("Arizona")
      .build();
  });

  it("sets the clauses.", () => {
    const expected = [clauseA, clauseB, clauseC, clauseD];
    expect(createTestTarget().clauses(expected).build().clauses).toEqual(
      expected,
    );
  });

  it("adds clauses.", () => {
    const expected = [clauseA, clauseB, clauseC, clauseD];
    const actual = createTestTarget()
      .clause(clauseA)
      .clause(clauseB)
      .clause(clauseC)
      .clause(clauseD)
      .build().clauses;
    expect(actual).toEqual(expected);
  });

  it("sets the operator to and.", () => {
    expect(
      createTestTarget().and().clause(clauseA).clause(clauseB).build().operator,
    ).toEqual(ZOperatorLogic.And);
  });

  it("sets the operator to or.", () => {
    expect(
      createTestTarget().or().clause(clauseA).clause(clauseB).build().operator,
    ).toEqual(ZOperatorLogic.Or);
  });
});
