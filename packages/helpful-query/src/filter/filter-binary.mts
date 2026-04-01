import { keyBy, values } from "lodash-es";

import type { IZFilterMetadata, IZFilterSubject } from "./filter-subject.mjs";

/**
 * The operators for a {@link IZFilterBinary} filter.
 */
export enum ZOperatorBinary {
  /**
   * Equals
   */
  Equal = "eq",
  /**
   * Not equals.
   */
  NotEqual = "neq",
  /**
   * Less than or equal to.
   */
  LessThanEqualTo = "lteq",
  /**
   * Less than.
   */
  LessThan = "lt",
  /**
   * Greater than or equal to.
   */
  GreaterThanEqualTo = "gteq",
  /**
   * Greater than.
   */
  GreaterThan = "gt",
  /**
   * Like (Contains)
   */
  Like = "like",
  /**
   * Starts with
   */
  StartsWith = "sw",
  /**
   * Ends with
   */
  EndsWith = "ew",
}

/**
 * Represents a standard comparison filter between a subject field and a wanted value.
 */
export interface IZFilterBinary extends IZFilterSubject<ZOperatorBinary> {
  /**
   * The value to sort by.
   */
  value: any;
}

/**
 * Represents an object that can build up a binary filter.
 */
export class ZFilterBinaryBuilder {
  /**
   * The __type__ identifier for an {@link IZFilterBinary} object.
   */
  public static readonly Type = "binary";

  private _filter: IZFilterBinary;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._filter = {
      subject: "",
      value: null,
      operator: ZOperatorBinary.Equal,
      __type__: ZFilterBinaryBuilder.Type,
    };
  }

  /**
   * Sets the subject.
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
   * Overrides the value.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public value(val: any): this {
    this._filter.value = val;
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
  public operator(val: ZOperatorBinary) {
    this._filter.operator = val;
    return this;
  }

  /**
   * Constructs an equal relationship.
   *
   * @returns
   *        This object
   */
  public equal = this.operator.bind(this, ZOperatorBinary.Equal);

  /**
   * Constructs a not equal filter.
   *
   * @returns
   *        This object
   */
  public notEqual = this.operator.bind(this, ZOperatorBinary.NotEqual);

  /**
   * Constructs a less than filter.
   *
   * @returns
   *        This object
   */
  public lessThan = this.operator.bind(this, ZOperatorBinary.LessThan);

  /**
   * Constructs a greater than filter.
   *
   * @returns
   *        This object.
   */
  public greaterThan = this.operator.bind(this, ZOperatorBinary.GreaterThan);

  /**
   * Constructs a less than or equal to filter.
   *
   * @returns
   *        This object.
   */
  public lessThanEqualTo = this.operator.bind(
    this,
    ZOperatorBinary.LessThanEqualTo,
  );

  /**
   * Constructs a greater than or equal to filter.
   *
   * @returns
   *        This object.
   */
  public greaterThanEqualTo = this.operator.bind(
    this,
    ZOperatorBinary.GreaterThanEqualTo,
  );

  /**
   * Constructs a like filter.
   *
   * @returns
   *        This object.
   */
  public like = this.operator.bind(this, ZOperatorBinary.Like);

  /**
   * Constructs a starts with filter.
   *
   * @returns
   *        This object.
   */
  public startsWith = this.operator.bind(this, ZOperatorBinary.StartsWith);

  /**
   * Constructs an ends with filter.
   *
   * @returns
   *        This object.
   */
  public endsWith = this.operator.bind(this, ZOperatorBinary.EndsWith);

  /**
   * Returns a copy of the currently built filter.
   *
   * @returns
   *        A copy of the currently built filter.
   */
  public build(): IZFilterBinary {
    return { ...this._filter };
  }
}

/**
 * Type guard for determining if a target filter is a binary filter.
 *
 * @param filter -
 *        The filter to test.
 *
 * @returns
 *        True if filters type is a binary filter.  False otherwise.
 */
export function isBinaryFilter(
  filter: IZFilterMetadata | null | undefined,
): filter is IZFilterBinary {
  return filter?.__type__ === ZFilterBinaryBuilder.Type;
}

/**
 * The possible operators as a constant list.
 */
export const ZOperatorsBinary = values(ZOperatorBinary);

const _ZOperatorsBinaryLookup = keyBy(ZOperatorsBinary);

/**
 * Gets whether a candidate string represents a binary operator.
 *
 * @returns
 *        Type guard true if candidate is a binary operator, false
 *        otherwise.
 */
export function isBinaryOperator(
  candidate: string | null | undefined,
): candidate is ZOperatorBinary {
  return (
    candidate != null &&
    Object.prototype.hasOwnProperty.call(_ZOperatorsBinaryLookup, candidate)
  );
}

/**
 * A mapping of comparators that relates a data to a value.
 */
export const ZBinaryComparators: Record<
  ZOperatorBinary,
  (data: any, value: any) => boolean
> = {
  [ZOperatorBinary.Equal]: (d, v) => d === v,
  [ZOperatorBinary.NotEqual]: (d, v) => d !== v,
  [ZOperatorBinary.GreaterThan]: (d, v) => d > v,
  [ZOperatorBinary.GreaterThanEqualTo]: (d, v) => d >= v,
  [ZOperatorBinary.LessThan]: (d, v) => d < v,
  [ZOperatorBinary.LessThanEqualTo]: (d, v) => d <= v,
  [ZOperatorBinary.Like]: (d, v) => `${d}`.indexOf(`${v}`) >= 0,
  [ZOperatorBinary.StartsWith]: (d, v) => `${d}`.startsWith(`${v}`),
  [ZOperatorBinary.EndsWith]: (d, v) => `${d}`.endsWith(`${v}`),
};
