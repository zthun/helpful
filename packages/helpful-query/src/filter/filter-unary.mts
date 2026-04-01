import { keyBy, values } from "lodash-es";

import type { IZFilterMetadata, IZFilterSubject } from "./filter-subject.mjs";

/**
 * The operators for an {@link IZFilterUnary} filter.
 */
export enum ZOperatorUnary {
  /**
   * Is null.
   */
  IsNull = "null",
  /**
   * Is not null.
   */
  IsNotNull = "is-not-null",
}

/**
 * Represents a yes/no style filter.
 */
export type IZFilterUnary = IZFilterSubject<ZOperatorUnary>;

/**
 * Represents a builder for a UnaryFilter object.
 */
export class ZFilterUnaryBuilder {
  /**
   * The __type__ identifier for an {@link IZFilterUnary} object.
   */
  public static readonly Type = "unary";

  private _filter: IZFilterUnary;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._filter = {
      subject: null as any,
      operator: ZOperatorUnary.IsNull,
      __type__: "unary",
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
   * Sets the operator.
   *
   * @param val -
   *        The operator to set.
   *
   * @returns
   *        This object.
   */
  public operator(val: ZOperatorUnary): this {
    this._filter.operator = val;
    return this;
  }

  /**
   * Sets the operator to is null.
   *
   * @returns
   *        This object.
   */
  public isNull = this.operator.bind(this, ZOperatorUnary.IsNull);

  /**
   * Sets the operator to is null.
   *
   * @returns
   *        This object.
   */
  public isNotNull = this.operator.bind(this, ZOperatorUnary.IsNotNull);

  /**
   * Returns a copy of the built filter.
   *
   * @returns
   *        A copy of the current filter.
   */
  public build(): IZFilterUnary {
    return { ...this._filter };
  }
}

/**
 * Type guard for determining if a target filter is a unary filter.
 *
 * @param filter -
 *        The filter to test.
 *
 * @returns
 *        True if filters type is a unary filter.  False otherwise.
 */
export function isUnaryFilter(
  filter: IZFilterMetadata | null | undefined,
): filter is IZFilterUnary {
  return filter?.__type__ === ZFilterUnaryBuilder.Type;
}

/**
 * A list of all unary operators.
 */
export const ZOperatorsUnary = values(ZOperatorUnary);
const _ZOperatorsUnaryLookup = keyBy(ZOperatorsUnary);

/**
 * Gets whether a candidate string represents a unary operator.
 *
 * @returns
 *        Type guard true if candidate is a unary operator, false
 *        otherwise.
 */
export function isUnaryOperator(
  candidate: string | null | undefined,
): candidate is ZOperatorUnary {
  return (
    candidate != null &&
    Object.prototype.hasOwnProperty.call(_ZOperatorsUnaryLookup, candidate)
  );
}

/**
 * Comparators for unary operators.
 */
export const ZUnaryComparators: Record<ZOperatorUnary, (data: any) => boolean> =
  {
    [ZOperatorUnary.IsNull]: (data: any) => data == null,
    [ZOperatorUnary.IsNotNull]: (data: any) => data != null,
  };
