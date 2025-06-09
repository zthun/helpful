import { get } from "lodash-es";
import type { IZDataMatch } from "../match/data-match.mjs";
import { ZBinaryComparators } from "./filter-binary.mjs";
import {
  ZCollectionComparators,
  isCollectionFilter,
} from "./filter-collection.mjs";
import type { IZFilterLogic } from "./filter-logic.mjs";
import { ZOperatorLogic, isLogicFilter } from "./filter-logic.mjs";
import type { IZFilterSubject } from "./filter-subject.mjs";
import { ZUnaryComparators, isUnaryFilter } from "./filter-unary.mjs";
import type { IZFilter } from "./filter.mjs";

/**
 * Represents a data match object that applies a filter.
 *
 * This implementation of a data match will search against fields on the given target
 * object where the filter subject matches a property on said object.
 *
 * @param TData -
 *        The type of data being filtered.
 */
export class ZDataFilterFields<TData> implements IZDataMatch<TData, IZFilter> {
  private _matchLogicFilter(data: TData, filter: IZFilterLogic): boolean {
    return filter.operator === ZOperatorLogic.And
      ? filter.clauses.every((f) => this.match(data, f))
      : filter.clauses.some((f) => this.match(data, f));
  }

  private _matchSubjectFilter<T extends string, F extends IZFilterSubject<T>>(
    data: TData,
    filter: F,
    comparators: Record<T, (d: any, v?: any) => boolean>,
    value?: any,
  ) {
    const comparator = comparators[filter.operator];
    const compareAgainst = filter.subject
      ? get(data, filter.subject, null)
      : data;
    return comparator(compareAgainst, value);
  }

  public match(data: TData, filter: IZFilter): boolean {
    if (isLogicFilter(filter)) {
      return this._matchLogicFilter(data, filter);
    }

    if (isCollectionFilter(filter)) {
      return this._matchSubjectFilter(
        data,
        filter,
        ZCollectionComparators,
        filter.values,
      );
    }

    if (isUnaryFilter(filter)) {
      return this._matchSubjectFilter(data, filter, ZUnaryComparators);
    }

    return this._matchSubjectFilter(
      data,
      filter,
      ZBinaryComparators,
      filter.value,
    );
  }
}
