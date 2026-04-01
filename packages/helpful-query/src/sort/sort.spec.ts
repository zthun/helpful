import { describe, expect, it } from "vitest";

import type { IZSort } from "./sort.mjs";
import { ZSortBuilder, ZSortDirection } from "./sort.mjs";

describe("Sort Builder", () => {
  function createTestTarget() {
    return new ZSortBuilder();
  }

  it("sets the sort order.", () => {
    const expected: IZSort[] = [
      { subject: "a", direction: ZSortDirection.Ascending },
      { subject: "b", direction: ZSortDirection.Descending },
    ];
    expect(createTestTarget().ascending("a").descending("b").build()).toEqual(
      expected,
    );
  });
});
