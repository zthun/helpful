import { describe, expect, it } from "vitest";

import { peel, peelBetween } from "./peel.mjs";

describe("Peel", () => {
  it("should peel a candidate from the start of the string", () => {
    // Arrange.
    const target = "chocolate";

    // Act.
    const actual = peel(target, ["iam", "be", "choco", "is"]);

    // Assert.
    expect(actual).toEqual(["choco", "late"]);
  });

  it("should return null if a candidate cannot be pulled", () => {
    // Arrange.
    const target = "chocolate";

    // Act.
    const actual = peel(target, ["iam", "be", "is"]);

    // Assert.
    expect(actual).toEqual([null, target]);
  });
});

describe("Peel Between", () => {
  it("should return null if the start of the string is not the opening", () => {
    // Arrange.
    const target = "a, b, c)";

    // Act.
    const actual = peelBetween(target, "(", ")");

    // Assert.
    expect(actual).toEqual([null, target]);
  });

  it("should return null if the string is not closed", () => {
    // Arrange.
    const target = "(a, (b), (c)";

    // Act.
    const actual = peelBetween(target, "(", ")");

    // Assert.
    expect(actual).toEqual([null, target]);
  });

  it("should return the string between open and close", () => {
    // Arrange.
    const target = "[(a, (b), (c))]";

    // Act.
    const actual = peelBetween(target, "[(", ")]");

    // Assert.
    expect(actual).toEqual(["a, (b), (c)", ""]);
  });
});
