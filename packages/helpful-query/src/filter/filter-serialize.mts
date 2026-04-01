import type { IZSerialize } from "@zthun/helpful-fn";

import type { IZFilter } from "./filter.mjs";
import { isBinaryFilter } from "./filter-binary.mjs";
import { isCollectionFilter } from "./filter-collection.mjs";
import { isLogicFilter } from "./filter-logic.mjs";
import { isUnaryFilter } from "./filter-unary.mjs";

/**
 * Represents a serializer that can serialize a filter object to a string.
 */
export class ZFilterSerialize implements IZSerialize<IZFilter> {
  public serialize(candidate: IZFilter | null | undefined): string | undefined {
    if (isBinaryFilter(candidate)) {
      return `${candidate.operator}(${candidate.subject}, ${JSON.stringify(candidate.value)})`;
    }

    if (isUnaryFilter(candidate)) {
      return `${candidate.operator}(${candidate.subject})`;
    }

    if (isCollectionFilter(candidate)) {
      return `${candidate.operator}(${candidate.subject}, ${candidate.values.map((v) => JSON.stringify(v)).join(", ")})`;
    }

    if (isLogicFilter(candidate)) {
      return `${candidate.operator}(${candidate.clauses.map((c) => this.serialize(c)).join(", ")})`;
    }

    return undefined;
  }
}
