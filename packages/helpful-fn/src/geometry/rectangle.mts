import type { ZAnchor } from "../anchor/anchor.mjs";
import { ZHorizontalAnchor, ZVerticalAnchor } from "../anchor/anchor.mjs";
import type { IZPoint2d } from "./point.mjs";
import type { IZQuadrilateral } from "./quadrilateral.mjs";
import { ZQuadrilateralBuilder } from "./quadrilateral.mjs";

/**
 * Represents a helper object that can run calculations on a numeric quadrilateral.
 */
export class ZRectangle {
  /**
   * Initializes a new instance of this object.
   *
   * @param sides -
   *        The numeric sides of a quadrilateral.
   */
  public constructor(public readonly sides: IZQuadrilateral) {}

  /**
   * Calculates the width of the rectangle.
   *
   * @returns
   *        The numeric width of the rectangle.
   */
  public width(): number {
    const { left, right } = this.sides;
    return right - left;
  }

  /**
   * Calculates the height of the rectangle.
   *
   * @returns
   *        The numeric height of the rectangle.
   */
  public height(): number {
    const { top, bottom } = this.sides;
    return bottom - top;
  }

  /**
   * Calculates the area of the rectangle.
   *
   * @returns
   *        The numeric area of the rectangle.
   */
  public area(): number {
    return this.width() * this.height();
  }

  /**
   * Takes a candidate and attaches it to this rectangle that matches the anchor points.
   *
   * @param anchor -
   *        The anchor point of this rectangle.
   * @param candidate -
   *        The candidate rectangle to move
   * @param candidateAnchor -
   *        The anchor point of the candidate rectangle.
   *
   * @returns
   *        A new quadrilateral that has it's placement such that if candidate was moved
   *        to this resulting position, would have its candidateAnchor be in the same
   *        place as this rectangles specified anchor.
   */
  public attach(
    anchor: ZAnchor,
    candidate: IZQuadrilateral,
    candidateAnchor: ZAnchor,
  ): IZQuadrilateral {
    const _candidate = new ZRectangle(candidate);
    const { x: ax, y: ay } = this.point(anchor);
    const { x: ox, y: oy } = new ZRectangle(candidate).point(candidateAnchor);

    const left: number = candidate.left + (ax - ox);
    const top: number = candidate.top + (ay - oy);
    const bottom: number = top + _candidate.height();
    const right = left + _candidate.width();

    return new ZQuadrilateralBuilder(0)
      .left(left)
      .right(right)
      .top(top)
      .bottom(bottom)
      .build();
  }

  /**
   * Takes the candidate quadrilateral and adjusts it's coordinates to fit inside this rectangle.
   *
   * This is done by shifting the rectangle left, right, up, and down to make sure it is bounded
   * inside.
   *
   * If the candidate width or height is larger than this rectangle, thus it cannot fit, then
   * the candidate will be centered on the dimension where it is too big to fit.
   *
   * @param candidate -
   *        The candidate quadrilateral to fit.
   *
   * @returns
   *        A new quadrilateral that offsets candidate so that it can fit inside this
   *        rectangle.
   */
  public offsetToFit(candidate: IZQuadrilateral): IZQuadrilateral {
    let _candidate = candidate;
    const candidateRectangle = new ZRectangle(candidate);

    if (candidateRectangle.width() > this.width()) {
      // Center the horizontal
      const { x: cx } = candidateRectangle.middleCenter();
      const { x: tx } = this.middleCenter();

      _candidate = new ZQuadrilateralBuilder(0)
        .copy(_candidate)
        .left(_candidate.left - (cx - tx))
        .right(_candidate.right - (cx - tx))
        .build();
    } else {
      if (_candidate.left < this.sides.left) {
        // Move the candidate to the right.
        _candidate = new ZQuadrilateralBuilder(0)
          .copy(_candidate)
          .left(this.sides.left)
          .right(_candidate.right + (this.sides.left - _candidate.left))
          .build();
      }

      if (_candidate.right > this.sides.right) {
        // Move the candidate to the left.
        _candidate = new ZQuadrilateralBuilder(0)
          .copy(_candidate)
          .right(this.sides.right)
          .left(_candidate.left - (_candidate.right - this.sides.right))
          .build();
      }
    }

    if (candidateRectangle.height() > this.height()) {
      // Center the vertical
      const { y: cy } = candidateRectangle.middleCenter();
      const { y: ty } = this.middleCenter();

      _candidate = new ZQuadrilateralBuilder(0)
        .copy(_candidate)
        .top(_candidate.top - (cy - ty))
        .bottom(_candidate.bottom - (cy - ty))
        .build();
    } else {
      if (_candidate.bottom > this.sides.bottom) {
        // Move the candidate up.
        _candidate = new ZQuadrilateralBuilder(0)
          .copy(_candidate)
          .bottom(this.sides.bottom)
          .top(_candidate.top - (_candidate.bottom - this.sides.bottom))
          .build();
      }

      if (_candidate.top < this.sides.top) {
        // Move the candidate down
        _candidate = new ZQuadrilateralBuilder(0)
          .copy(_candidate)
          .top(this.sides.top)
          .bottom(_candidate.bottom + (this.sides.top - _candidate.top))
          .build();
      }
    }

    return _candidate;
  }

  /**
   * Calculates the (x, y) point given an anchor target.
   *
   * @param anchor -
   *        The anchor target to calculate the point for.
   *
   * @returns
   *        The numeric width of the rectangle.
   */
  public point(anchor: ZAnchor): IZPoint2d {
    const { bottom, left, right, top } = this.sides;
    const [vertical, horizontal] = anchor;

    const v: Record<ZVerticalAnchor, number> = {
      [ZVerticalAnchor.Top]: top,
      [ZVerticalAnchor.Middle]: (bottom + top) / 2,
      [ZVerticalAnchor.Bottom]: bottom,
    };

    const h: Record<ZHorizontalAnchor, number> = {
      [ZHorizontalAnchor.Left]: left,
      [ZHorizontalAnchor.Center]: (right + left) / 2,
      [ZHorizontalAnchor.Right]: right,
    };

    return { x: h[horizontal], y: v[vertical] };
  }

  /**
   * Calculates the top left point of the rectangle.
   *
   * @returns
   *        The top left point of the rectangle.
   */
  public topLeft = this.point.bind(this, [
    ZVerticalAnchor.Top,
    ZHorizontalAnchor.Left,
  ]);

  /**
   * Calculates the top center point of the rectangle.
   *
   * @returns
   *        The top center point of the rectangle.
   */
  public topCenter = this.point.bind(this, [
    ZVerticalAnchor.Top,
    ZHorizontalAnchor.Center,
  ]);

  /**
   * Calculates the top right point of the rectangle.
   *
   * @returns
   *        The top right point of the rectangle.
   */
  public topRight = this.point.bind(this, [
    ZVerticalAnchor.Top,
    ZHorizontalAnchor.Right,
  ]);

  /**
   * Calculates the middle left point of the rectangle.
   *
   * @returns
   *        The middle left point of the rectangle.
   */
  public middleLeft = this.point.bind(this, [
    ZVerticalAnchor.Middle,
    ZHorizontalAnchor.Left,
  ]);

  /**
   * Calculates the middle center point of the rectangle.
   *
   * @returns
   *        The middle center point of the rectangle.
   */
  public middleCenter = this.point.bind(this, [
    ZVerticalAnchor.Middle,
    ZHorizontalAnchor.Center,
  ]);

  /**
   * Calculates the middle right point of the rectangle.
   *
   * @returns
   *        The middle right point of the rectangle.
   */
  public middleRight = this.point.bind(this, [
    ZVerticalAnchor.Middle,
    ZHorizontalAnchor.Right,
  ]);

  /**
   * Calculates the bottom left point of the rectangle.
   *
   * @returns
   *        The bottom left point of the rectangle.
   */
  public bottomLeft = this.point.bind(this, [
    ZVerticalAnchor.Bottom,
    ZHorizontalAnchor.Left,
  ]);

  /**
   * Calculates the bottom center point of the rectangle.
   *
   * @returns
   *        The bottom center point of the rectangle.
   */
  public bottomCenter = this.point.bind(this, [
    ZVerticalAnchor.Bottom,
    ZHorizontalAnchor.Center,
  ]);

  /**
   * Calculates the bottom right point of the rectangle.
   *
   * @returns
   *        The bottom right point of the rectangle.
   */
  public bottomRight = this.point.bind(this, [
    ZVerticalAnchor.Bottom,
    ZHorizontalAnchor.Right,
  ]);
}
