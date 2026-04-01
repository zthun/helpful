import { describe, expect, it } from "vitest";

import type { JoinListInputParameter } from "./join-defined.mjs";
import {
  commaJoinDefined,
  cssJoinDefined,
  spaceJoinDefined,
} from "./join-defined.mjs";

describe("join list", () => {
  function assertProducesList<T>(
    expected: string,
    _joinList: (...items: JoinListInputParameter<T>[]) => string,
    ...items: JoinListInputParameter<T>[]
  ) {
    // Arrange.
    // Act.
    const actual = _joinList(...items);
    // Assert.
    expect(actual).toEqual(expected);
  }

  it("should return the empty string if no items are passed.", () => {
    assertProducesList("", spaceJoinDefined);
  });

  it("should return the empty string if only null and undefined items are passed.", () => {
    assertProducesList("", spaceJoinDefined, undefined, null);
  });

  it("should return the elements if a [T boolean] tuple has a true boolean.", () => {
    const expected = "yes";
    assertProducesList("yes", cssJoinDefined, [expected, true]);
  });

  it("should join all elements that are non null, non undefined, and non false tuples.", () => {
    const expected = "One,Two,Four,Seven";
    assertProducesList(
      expected,
      commaJoinDefined,
      "One",
      "Two",
      undefined,
      "Four",
      null,
      ["Six", false],
      ["Seven", true],
    );
  });
});
