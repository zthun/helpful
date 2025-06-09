import { describe, expect, it } from "vitest";
import { ZSortSerialize } from "./sort-serialize.mjs";
import type { IZSort } from "./sort.mjs";
import { ZSortBuilder } from "./sort.mjs";

describe("ZSortSerialize", () => {
  const createTestTarget = () => new ZSortSerialize();

  const assertSerializes = (
    expected: string | undefined,
    candidate: IZSort[] | null | undefined,
  ) => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const actual = target.serialize(candidate);
    // Assert.
    expect(actual).toEqual(expected);
  };

  it("should serialize to undefined if the list is empty", () => {
    assertSerializes(undefined, []);
  });

  it("should serialize to undefined if the list is null", () => {
    assertSerializes(undefined, null);
  });

  it("should serialize to undefined if the list is undefined", () => {
    assertSerializes(undefined, undefined);
  });

  it("should serialize a single sort", () => {
    const sort = new ZSortBuilder().ascending("subject").build();
    assertSerializes("asc(subject)", sort);
  });

  it("should serialize multiple sorts", () => {
    const sort = new ZSortBuilder()
      .ascending("a")
      .descending("b")
      .descending("c")
      .ascending("d")
      .build();
    assertSerializes("(asc(a), desc(b), desc(c), asc(d))", sort);
  });
});
