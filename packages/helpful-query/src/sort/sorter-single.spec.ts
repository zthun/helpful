import { beforeEach, describe, expect, it } from "vitest";

import type { IZSort } from "./sort.mjs";
import { ZSortBuilder, ZSortDirection } from "./sort.mjs";
import { ZSorterSingle } from "./sorter-single.mjs";

describe("ZSorterSingle", () => {
  let initial: IZSort[] | undefined;

  const createTestTarget = () => new ZSorterSingle(initial);

  beforeEach(() => {
    initial = undefined;
  });

  it("should sort in ascending order if the subject was never sorted", () => {
    // Arrange.
    const subject = "name";
    const target = createTestTarget();
    // Act.
    target.sort(subject);
    // Assert.
    expect(target.index(subject)).toEqual(1);
    expect(target.sorted(subject)).toEqual(ZSortDirection.Ascending);
  });

  it("should sort in descending order if the metadata is sorted in ascending order", () => {
    // Arrange.
    const subject = "name";
    initial = new ZSortBuilder().ascending(subject).build();
    const target = createTestTarget();
    // Act.
    target.sort(subject);
    // Assert.
    expect(target.index(subject)).toEqual(1);
    expect(target.sorted(subject)).toEqual(ZSortDirection.Descending);
  });

  it("should remove the sort if the sort order is descending", () => {
    // Arrange.
    const subject = "name";
    initial = new ZSortBuilder().descending(subject).build();
    const target = createTestTarget();
    // Act.
    target.sort(subject);
    // Assert.
    expect(target.index(subject)).toEqual(-1);
    expect(target.sorted(subject)).toBeUndefined();
  });

  it("should replace the sort if sorting a different subject", () => {
    // Arrange.
    const subjectA = "name";
    const subjectB = "id";
    const target = createTestTarget();
    // Act.
    target.sort(subjectA);
    target.sort(subjectB);
    // Assert.
    expect(target.index(subjectA)).toEqual(-1);
    expect(target.sorted(subjectA)).toBeUndefined();
    expect(target.index(subjectB)).toEqual(1);
    expect(target.sorted(subjectB)).toEqual(ZSortDirection.Ascending);
  });
});
