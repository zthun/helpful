import { isEmptyObject } from "../empty/is-empty-object.mjs";
import { firstDefined } from "../first-where/first-where.mjs";
import type { IZPoint2d } from "./point.mjs";

/**
 * Represents a object of 4 side values.
 *
 * @param T -
 *        Value type.  Typically number.
 */
export interface IZQuadrilateral<T = number> {
  /**
   * Bottom value.
   */
  bottom: T;
  /**
   * Left value.
   */
  left: T;
  /**
   * Right value.
   */
  right: T;
  /**
   * Top value.
   */
  top: T;
}

/**
 * Represents an object that can describe a quadrilateral.
 *
 * Note that there will be limitations on what you can describe
 * when building Quadrilaterals of Quadrilaterals, or Quadrilaterals
 * of Point2d's which is not supported and has undefined behavior.
 */
export type ZQuadrilateralLike<T = number> =
  | T
  | Partial<IZPoint2d<T>>
  | Partial<IZQuadrilateral<T>>
  | null
  | undefined;

/**
 * Represents a builder for a quadrilateral object.
 */
export class ZQuadrilateralBuilder<T = number> {
  private _quad: IZQuadrilateral<T>;

  /**
   * Initializes a new instance of this object.
   *
   * @param start -
   *        The starting value.
   */
  public constructor(start: T) {
    this._quad = {
      bottom: start,
      left: start,
      right: start,
      top: start,
    };
  }

  /**
   * Sets the bottom value.
   *
   * @param bottom -
   *        The bottom value.
   *
   * @returns
   *        This object.
   */
  public bottom(bottom: T): this {
    this._quad.bottom = bottom;
    return this;
  }

  /**
   * Sets the left value.
   *
   * @param left -
   *        The left value.
   *
   * @returns
   *        This object.
   */
  public left(left: T): this {
    this._quad.left = left;
    return this;
  }

  /**
   * Sets the right value.
   *
   * @param right -
   *        The right value.
   *
   * @returns
   *        This object.
   */
  public right(right: T): this {
    this._quad.right = right;
    return this;
  }

  /**
   * Sets the top value.
   *
   * @param top -
   *        The top value.
   *
   * @returns
   *        This object.
   */
  public top(top: T): this {
    this._quad.top = top;
    return this;
  }

  /**
   * Sets the left and right value.
   *
   * @param x -
   *        The left and right value.
   *
   * @returns
   *        This object.
   */
  public x(x: T): this {
    return this.left(x).right(x);
  }

  /**
   * Sets the top and bottom value.
   *
   * @param y -
   *        The top and bottom value.
   *
   * @returns
   *        This object.
   */
  public y(y: T): this {
    return this.bottom(y).top(y);
  }

  /**
   * Constructs a full quadrilateral from an object that describes a quadrilateral.
   *
   * Note the limitations of this method.  If T is of type Quadrilateral or Point2d,
   * then this method's behavior is undefined and it will most likely build a
   * corrupt object.
   *
   * @param other -
   *        The object to build from.
   *
   * @returns
   *        This object.
   */
  public from(other: ZQuadrilateralLike<T>): this {
    function isPoint2d<T>(
      candidate: ZQuadrilateralLike<T>,
    ): candidate is Partial<IZPoint2d<T>> {
      return (
        candidate != null &&
        (Object.prototype.hasOwnProperty.call(candidate, "x") ||
          Object.prototype.hasOwnProperty.call(candidate, "y"))
      );
    }

    function isQuadrilateral<T>(
      candidate: ZQuadrilateralLike<T>,
    ): candidate is Partial<IZQuadrilateral<T>> {
      return (
        candidate != null &&
        (Object.prototype.hasOwnProperty.call(candidate, "bottom") ||
          Object.prototype.hasOwnProperty.call(candidate, "left") ||
          Object.prototype.hasOwnProperty.call(candidate, "right") ||
          Object.prototype.hasOwnProperty.call(candidate, "top"))
      );
    }

    if (isQuadrilateral(other)) {
      this._quad.bottom = firstDefined(this._quad.bottom, other.bottom);
      this._quad.left = firstDefined(this._quad.left, other.left);
      this._quad.right = firstDefined(this._quad.right, other.right);
      this._quad.top = firstDefined(this._quad.top, other.top);
      return this;
    }

    if (isPoint2d(other)) {
      this._quad.bottom = firstDefined(this._quad.bottom, other.y);
      this._quad.left = firstDefined(this._quad.left, other.x);
      this._quad.right = firstDefined(this._quad.right, other.x);
      this._quad.top = firstDefined(this._quad.top, other.y);
      return this;
    }

    if (!isEmptyObject(other)) {
      this._quad.bottom = firstDefined(this._quad.bottom, other);
      this._quad.left = firstDefined(this._quad.left, other);
      this._quad.right = firstDefined(this._quad.right, other);
      this._quad.top = firstDefined(this._quad.top, other);
    }

    return this;
  }

  /**
   * Copies another quadrilateral object into the current instance.
   *
   * @param other -
   *        The quadrilateral object to copy.
   *
   * @returns
   *        This object.
   */
  public copy(other: IZQuadrilateral<T>): this {
    // The copy is done this way instead of a structured
    // copy because we want to support things like
    // copy(other.getBoundingClientRect()) which
    // is immutable when working on the client.
    this._quad.left = other.left;
    this._quad.right = other.right;
    this._quad.top = other.top;
    this._quad.bottom = other.bottom;
    return this;
  }

  /**
   * Returns the built quadrilateral object.
   *
   * @returns
   *        The built quadrilateral.
   */
  public build(): IZQuadrilateral<T> {
    return structuredClone(this._quad);
  }
}
