import { describe, expect, it } from "vitest";

import type { ZAnchor } from "../anchor/anchor.mjs";
import { ZHorizontalAnchor, ZVerticalAnchor } from "../anchor/anchor.mjs";
import type { IZPoint2d } from "./point.mjs";
import type { IZQuadrilateral } from "./quadrilateral.mjs";
import { ZQuadrilateralBuilder } from "./quadrilateral.mjs";
import { ZRectangle } from "./rectangle.mjs";

describe("ZRectangle", () => {
  const createTestTarget = (quadrilateral: IZQuadrilateral<number>) =>
    new ZRectangle(quadrilateral);

  describe("Dimensions", () => {
    describe("Width", () => {
      it("should return the difference between the right and left", () => {
        // Arrange.
        const quadrilateral = new ZQuadrilateralBuilder(0)
          .left(-10)
          .right(10)
          .build();
        const target = createTestTarget(quadrilateral);
        // Act.
        const actual = target.width();
        // Assert.
        expect(actual).toEqual(20);
      });
    });

    describe("Height", () => {
      it("should return the difference between the bottom and top", () => {
        // Arrange.
        const quadrilateral = new ZQuadrilateralBuilder(0)
          .top(-20)
          .bottom(50)
          .build();
        const target = createTestTarget(quadrilateral);
        // Act.
        const actual = target.height();
        // Assert.
        expect(actual).toEqual(70);
      });
    });
  });

  describe("Area", () => {
    it("should return the area", () => {
      // Arrange.
      const quadrilateral = new ZQuadrilateralBuilder(10)
        .top(0)
        .left(0)
        .build();
      const target = createTestTarget(quadrilateral);
      // Act.
      const actual = target.area();
      // Assert.
      expect(actual).toEqual(100);
    });
  });

  describe("Points", () => {
    const shouldReturnPoint = (
      expected: IZPoint2d,
      rect: IZQuadrilateral<number>,
      actualFn: (t: ZRectangle) => IZPoint2d,
    ) => {
      // Arrange.
      const target = createTestTarget(rect);
      // Act.
      const actual = actualFn(target);
      // Assert.
      expect(actual).toEqual(expected);
    };

    it("should return the top left", () => {
      const rectangle = new ZQuadrilateralBuilder(0).top(-10).left(32).build();
      shouldReturnPoint({ x: 32, y: -10 }, rectangle, (t) => t.topLeft());
    });

    it("should return the top center", () => {
      const rectangle = new ZQuadrilateralBuilder(0)
        .top(-12)
        .left(2)
        .right(10)
        .build();
      shouldReturnPoint({ x: 6, y: -12 }, rectangle, (t) => t.topCenter());
    });

    it("should return the top right", () => {
      const rectangle = new ZQuadrilateralBuilder(0).top(-12).right(10).build();
      shouldReturnPoint({ x: 10, y: -12 }, rectangle, (t) => t.topRight());
    });

    it("should return the middle left", () => {
      const rectangle = new ZQuadrilateralBuilder(0)
        .top(-10)
        .bottom(30)
        .left(32)
        .build();
      shouldReturnPoint({ x: 32, y: 10 }, rectangle, (t) => t.middleLeft());
    });

    it("should return the middle center", () => {
      const rectangle = new ZQuadrilateralBuilder(0)
        .top(-12)
        .bottom(32)
        .left(2)
        .right(10)
        .build();
      shouldReturnPoint({ x: 6, y: 10 }, rectangle, (t) => t.middleCenter());
    });

    it("should return the middle right", () => {
      const rectangle = new ZQuadrilateralBuilder(0)
        .top(-12)
        .bottom(30)
        .right(10)
        .build();
      shouldReturnPoint({ x: 10, y: 9 }, rectangle, (t) => t.middleRight());
    });

    it("should return the bottom left", () => {
      const rectangle = new ZQuadrilateralBuilder(0)
        .bottom(30)
        .left(32)
        .build();
      shouldReturnPoint({ x: 32, y: 30 }, rectangle, (t) => t.bottomLeft());
    });

    it("should return the bottom center", () => {
      const rectangle = new ZQuadrilateralBuilder(0)
        .bottom(32)
        .left(2)
        .right(10)
        .build();
      shouldReturnPoint({ x: 6, y: 32 }, rectangle, (t) => t.bottomCenter());
    });

    it("should return the bottom right", () => {
      const rectangle = new ZQuadrilateralBuilder(0)
        .bottom(30)
        .right(10)
        .build();
      shouldReturnPoint({ x: 10, y: 30 }, rectangle, (t) => t.bottomRight());
    });
  });

  describe("Attach", () => {
    const component = new ZQuadrilateralBuilder(0)
      .left(50)
      .right(350)
      .top(100)
      .bottom(150)
      .build();
    const candidate = new ZQuadrilateralBuilder(0)
      .left(0)
      .right(100)
      .top(0)
      .bottom(300)
      .build();

    const shouldAdjustTo = (
      expected: IZQuadrilateral,
      anchor: ZAnchor,
      candidateAnchor: ZAnchor,
    ) => {
      // Arrange.
      const target = createTestTarget(component);

      // Act.
      const actual = target.attach(anchor, candidate, candidateAnchor);

      // Assert.
      expect(actual).toEqual(expected);
    };

    it("should return the new position of the rectangle that matches bottom-left to top-left", () => {
      shouldAdjustTo(
        new ZQuadrilateralBuilder(0)
          .left(component.left)
          .top(component.bottom)
          .right(component.left + candidate.right)
          .bottom(component.bottom + candidate.bottom)
          .build(),
        [ZVerticalAnchor.Bottom, ZHorizontalAnchor.Left],
        [ZVerticalAnchor.Top, ZHorizontalAnchor.Left],
      );
    });

    it("should return the new position of the rectangle that matches top-left to bottom-left", () => {
      shouldAdjustTo(
        new ZQuadrilateralBuilder(0)
          .left(component.left)
          .top(component.top - (candidate.bottom - candidate.top))
          .right(component.left + candidate.right)
          .bottom(component.top)
          .build(),
        [ZVerticalAnchor.Top, ZHorizontalAnchor.Left],
        [ZVerticalAnchor.Bottom, ZHorizontalAnchor.Left],
      );
    });

    it("should return the new position of the rectangle that matches middle-center to middle-center", () => {
      const { x, y } = new ZRectangle(component).middleCenter();
      const _candidate = new ZRectangle(candidate);
      const _width = _candidate.width();
      const _height = _candidate.height();

      shouldAdjustTo(
        new ZQuadrilateralBuilder(0)
          .left(x - _width / 2)
          .right(x + _width / 2)
          .top(y - _height / 2)
          .bottom(y + _height / 2)
          .build(),
        [ZVerticalAnchor.Middle, ZHorizontalAnchor.Center],
        [ZVerticalAnchor.Middle, ZHorizontalAnchor.Center],
      );
    });
  });

  describe("OffsetToFit", () => {
    it("should move the candidate up if the bottom of the candidate is greater than the bottom of the rectangle", () => {
      // Arrange.
      const target = createTestTarget(
        new ZQuadrilateralBuilder(0)
          .top(200)
          .bottom(500)
          .left(25)
          .right(100)
          .build(),
      );
      const candidate = new ZQuadrilateralBuilder(0)
        .top(400)
        .bottom(600)
        .left(50)
        .right(75)
        .build();

      // Act.
      const actual = target.offsetToFit(candidate);

      // Assert.
      expect(actual.top).toEqual(300);
      expect(actual.bottom).toEqual(500);
    });

    it("should move the candidate down if the top of the candidate is less than the top of the rectangle", () => {
      // Arrange.
      const target = createTestTarget(
        new ZQuadrilateralBuilder(0)
          .top(200)
          .bottom(500)
          .left(0)
          .right(100)
          .build(),
      );
      const candidate = new ZQuadrilateralBuilder(0)
        .top(100)
        .bottom(300)
        .left(25)
        .right(75)
        .build();

      // Act.
      const actual = target.offsetToFit(candidate);

      // Assert.
      expect(actual.top).toEqual(200);
      expect(actual.bottom).toEqual(400);
    });

    it("should move the candidate to the right if the left of the candidate is less then the left of the rectangle", () => {
      // Arrange.
      const target = createTestTarget(
        new ZQuadrilateralBuilder(0)
          .top(0)
          .bottom(500)
          .left(100)
          .right(500)
          .build(),
      );
      const candidate = new ZQuadrilateralBuilder(0)
        .top(50)
        .bottom(100)
        .left(50)
        .right(100)
        .build();

      // Act.
      const actual = target.offsetToFit(candidate);

      // Assert.
      expect(actual.left).toEqual(100);
      expect(actual.right).toEqual(150);
    });

    it("should move the candidate to the left if the right of the candidate is greater than the right of the rectangle", () => {
      // Arrange.
      const target = createTestTarget(
        new ZQuadrilateralBuilder(0)
          .top(0)
          .bottom(500)
          .left(100)
          .right(500)
          .build(),
      );
      const candidate = new ZQuadrilateralBuilder(0)
        .top(50)
        .bottom(100)
        .left(400)
        .right(600)
        .build();

      // Act.
      const actual = target.offsetToFit(candidate);

      // Assert.
      expect(actual.left).toEqual(300);
      expect(actual.right).toEqual(500);
    });

    it("should keep the candidate the same if it fits inside the rectangle", () => {
      // Arrange.
      const target = createTestTarget(
        new ZQuadrilateralBuilder(0)
          .top(100)
          .bottom(500)
          .left(50)
          .right(400)
          .build(),
      );
      const candidate = new ZQuadrilateralBuilder(0)
        .top(150)
        .bottom(300)
        .left(75)
        .right(200)
        .build();

      // Act.
      const actual = target.offsetToFit(candidate);

      // Assert.
      expect(actual).toEqual(candidate);
    });

    it("should keep the candidate the same if the inner rectangle is perfectly centered in the candidate", () => {
      // Arrange.
      const target = createTestTarget(
        new ZQuadrilateralBuilder(0)
          .top(100)
          .bottom(300)
          .left(100)
          .right(300)
          .build(),
      );
      const candidate = new ZQuadrilateralBuilder(0)
        .top(0)
        .bottom(400)
        .left(0)
        .right(400)
        .build();

      // Act.
      const actual = target.offsetToFit(candidate);

      // Assert.
      expect(actual).toEqual(candidate);
    });

    it("should center the candidate horizontally if the total width of the candidate is greater than the width of the rectangle (moving left)", () => {
      // Arrange.
      const target = createTestTarget(
        new ZQuadrilateralBuilder(0)
          .top(0)
          .bottom(500)
          .left(100)
          .right(300)
          .build(),
      );
      const candidate = new ZQuadrilateralBuilder(0)
        .top(100)
        .bottom(400)
        .left(90)
        .right(430)
        .build();

      // Act.
      const actual = target.offsetToFit(candidate);

      // Assert.
      expect(actual.left).toEqual(30);
      expect(actual.right).toEqual(370);
    });

    it("should center the candidate horizontally if the total width of the candidate is greater than the width of the rectangle (moving right)", () => {
      // Arrange.
      const target = createTestTarget(
        new ZQuadrilateralBuilder(0)
          .top(0)
          .bottom(500)
          .left(100)
          .right(300)
          .build(),
      );
      const candidate = new ZQuadrilateralBuilder(0)
        .top(100)
        .bottom(400)
        .left(20)
        .right(310)
        .build();

      // Act.
      const actual = target.offsetToFit(candidate);

      // Assert.
      expect(actual.left).toEqual(55);
      expect(actual.right).toEqual(345);
    });

    it("should center the candidate vertically if the total height of the candidate is greater than the height of the rectangle (moving down)", () => {
      // Arrange.
      const target = createTestTarget(
        new ZQuadrilateralBuilder(0)
          .top(100)
          .bottom(300)
          .left(0)
          .right(500)
          .build(),
      );
      const candidate = new ZQuadrilateralBuilder(0)
        .top(20)
        .bottom(310)
        .left(200)
        .right(400)
        .build();

      // Act.
      const actual = target.offsetToFit(candidate);

      // Assert.
      expect(actual.top).toEqual(55);
      expect(actual.bottom).toEqual(345);
    });

    it("should center the candidate vertically if the total height of the candidate is greater than the height of the rectangle (moving up)", () => {
      // Arrange.
      const target = createTestTarget(
        new ZQuadrilateralBuilder(0)
          .top(100)
          .bottom(300)
          .left(0)
          .right(500)
          .build(),
      );
      const candidate = new ZQuadrilateralBuilder(0)
        .top(90)
        .bottom(400)
        .left(200)
        .right(400)
        .build();

      // Act.
      const actual = target.offsetToFit(candidate);

      // Assert.
      expect(actual.top).toEqual(45);
      expect(actual.bottom).toEqual(355);
    });
  });
});
