import { describe, expect, it } from "vitest";

import type { IZQuadrilateral, ZQuadrilateralLike } from "./quadrilateral.mjs";
import { ZQuadrilateralBuilder } from "./quadrilateral.mjs";

describe("Setting all sides to the same value", () => {
  it("all sides should be n", () => {
    // Arrange.
    const e = 10;
    const expected: IZQuadrilateral<number> = {
      bottom: e,
      left: e,
      right: e,
      top: e,
    };
    // Act.
    const actual = new ZQuadrilateralBuilder(e).build();
    // Assert.
    expect(actual).toEqual(expected);
  });
});

describe("Setting x and y equivalent sides to same value", () => {
  it("should have equal x sides and equal y sides", () => {
    // Arrange.
    const lr = 5;
    const tb = 10;
    const expected: IZQuadrilateral<number> = {
      bottom: tb,
      left: lr,
      right: lr,
      top: tb,
    };
    // Act.
    const actual = new ZQuadrilateralBuilder(0).x(lr).y(tb).build();
    // Assert.
    expect(actual).toEqual(expected);
  });
});

describe("From", () => {
  const shouldOutputQuadrilateral = (
    expected: IZQuadrilateral,
    other: ZQuadrilateralLike,
  ) => {
    // Arrange.
    const target = new ZQuadrilateralBuilder(0);

    // Act.
    const actual = target.from(other).build();

    // Assert.
    expect(actual).toEqual(expected);
  };

  describe("Raw value", () => {
    it("should set all sides", () => {
      const expected = new ZQuadrilateralBuilder(10).build();
      shouldOutputQuadrilateral(expected, 10);
    });
  });

  describe("Point", () => {
    it("should set the top and bottom for y", () => {
      const expected = new ZQuadrilateralBuilder(0).y(10).build();
      shouldOutputQuadrilateral(expected, { y: 10 });
    });

    it("should set the left and right for x", () => {
      const expected = new ZQuadrilateralBuilder(0).y(10).build();
      shouldOutputQuadrilateral(expected, { y: 10 });
    });
  });

  describe("Quadrilateral", () => {
    it("should set bottom", () => {
      const expected = new ZQuadrilateralBuilder(0).bottom(10).build();
      shouldOutputQuadrilateral(expected, { bottom: 10 });
    });

    it("should set left", () => {
      const expected = new ZQuadrilateralBuilder(0).left(10).build();
      shouldOutputQuadrilateral(expected, { left: 10 });
    });

    it("should set right", () => {
      const expected = new ZQuadrilateralBuilder(0).right(10).build();
      shouldOutputQuadrilateral(expected, { right: 10 });
    });

    it("should set top", () => {
      const expected = new ZQuadrilateralBuilder(0).top(10).build();
      shouldOutputQuadrilateral(expected, { top: 10 });
    });
  });

  describe("Empty", () => {
    it("should keep the same values", () => {
      const expected = new ZQuadrilateralBuilder(0).build();
      shouldOutputQuadrilateral(expected, {});
    });

    it("should keep the same values for null", () => {
      const expected = new ZQuadrilateralBuilder(0).build();
      shouldOutputQuadrilateral(expected, null);
    });

    it("should keep the same values for undefined", () => {
      const expected = new ZQuadrilateralBuilder(0).build();
      shouldOutputQuadrilateral(expected, undefined);
    });
  });
});

describe("Copying", () => {
  it("should copy the quadrilateral", () => {
    // Arrange.
    const expected: IZQuadrilateral<number> = {
      bottom: 10,
      left: 11,
      right: 12,
      top: 13,
    };
    // Act.
    const actual = new ZQuadrilateralBuilder(0).copy(expected).build();
    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should be immutable", () => {
    // Arrange.
    const original: IZQuadrilateral<number> = {
      bottom: 10,
      left: 11,
      right: 12,
      top: 13,
    };
    // Act.
    const actual = new ZQuadrilateralBuilder(0).copy(original).top(0).build();
    // Assert.
    expect(original.top).toEqual(13);
    expect(actual.top).toEqual(0);
  });
});
