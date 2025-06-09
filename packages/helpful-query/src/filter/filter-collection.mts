import { keyBy, values } from "lodash-es";
import type { IZFilterMetadata, IZFilterSubject } from "./filter-subject.mjs";

/**
 * The operators for the {@link IZFilterCollection} filter.
 */
export enum ZOperatorCollection {
  /**
   * In
   */
  In = "in",
  /**
   * Not in.
   */
  NotIn = "not-in",
}

/**
 * A filter that operates on a collection of values.
 */
export interface IZFilterCollection
  extends IZFilterSubject<ZOperatorCollection> {
  /**
   * The values to compare the field against.
   */
  values: any[];
}

/**
 * Represents a builder for a collection filter.
 */
export class ZFilterCollectionBuilder {
  /**
   * The __type__ identifier for an {@link IZFilterCollection} object.
   */
  public static readonly Type = "collection";

  private _filter: IZFilterCollection;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._filter = {
      subject: "",
      operator: ZOperatorCollection.In,
      values: [],
      __type__: ZFilterCollectionBuilder.Type,
    };
  }

  /**
   * Sets the field.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public subject(val: string): this {
    this._filter.subject = val;
    return this;
  }

  /**
   * Sets all of the values.
   *
   * @param values -
   *        The collection of values.
   *
   * @returns
   *        This object.
   */
  public values(values: any[]): this {
    this._filter.values = values;
    return this;
  }

  /**
   * Adds a value to the existing collection of values.
   *
   * @param value -
   *        The value to add.
   *
   * @returns
   *        This object.
   */
  public value(value: any): this {
    this._filter.values.push(value);
    return this;
  }

  /**
   * Sets the operator.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public operator(val: ZOperatorCollection) {
    this._filter.operator = val;
    return this;
  }

  /**
   * Constructs an in filter.
   *
   * @returns
   *        This object.
   */
  public in = this.operator.bind(this, ZOperatorCollection.In);

  /**
   * Constructs a not in filter.
   *
   * @returns
   *        This object.
   */
  public notIn = this.operator.bind(this, ZOperatorCollection.NotIn);

  /**
   * Returns a copy of the constructed filter.
   *
   * @returns
   *        A copy of the currently built filter.
   */
  public build(): IZFilterCollection {
    return JSON.parse(JSON.stringify(this._filter));
  }
}

/**
 * Type guard for determining if a target filter is a collection filter.
 *
 * @param filter -
 *        The filter to test.
 *
 * @returns
 *        True if filters type is a collection filter.  False otherwise.
 */
export function isCollectionFilter(
  filter: IZFilterMetadata | null | undefined,
): filter is IZFilterCollection {
  return filter?.__type__ === ZFilterCollectionBuilder.Type;
}

/**
 * A mapping of comparators that determine if data exists or does not exist within a data set.
 */
export const ZCollectionComparators: Record<
  ZOperatorCollection,
  (data: any, values: any[]) => boolean
> = {
  [ZOperatorCollection.In]: (d, v) => v.indexOf(d) >= 0,
  [ZOperatorCollection.NotIn]: (d, v) => v.indexOf(d) < 0,
};

/**
 * A list of all collection operators.
 */
export const ZOperatorsCollection = values(ZOperatorCollection);
const _ZOperatorsCollectionLookup = keyBy(ZOperatorsCollection);

/**
 * Gets whether a candidate string represents a collection operator.
 *
 * @returns
 *        Type guard true if candidate is a collection operator, false
 *        otherwise.
 */
export function isCollectionOperator(
  candidate: string | null | undefined,
): candidate is ZOperatorCollection {
  return (
    candidate != null &&
    Object.prototype.hasOwnProperty.call(_ZOperatorsCollectionLookup, candidate)
  );
}
