import { describe, expect, it } from "vitest";

import type {
  IZQuadrilateralCorners,
  ZQuadrilateralCornersLike,
} from "./quadrilateral-corners.mjs";
import { ZQuadrilateralCornersBuilder } from "./quadrilateral-corners.mjs";

describe("Setting all 4 corners at the same time", () => {
  it("should set the same value", () => {
    // Arrange.
    const corner = 10;
    const expected: IZQuadrilateralCorners = {
      bottomLeft: corner,
      bottomRight: corner,
      topLeft: corner,
      topRight: corner,
    };
    const target = new ZQuadrilateralCornersBuilder(corner);

    // Act.
    const actual = target.build();

    // Assert.
    expect(actual).toEqual(expected);
  });
});

describe("Setting side positions", () => {
  it("should set bottomLeft and bottomRight for bottom", () => {
    // Arrange.
    const corner = 10;
    const expected: IZQuadrilateralCorners = {
      bottomLeft: corner,
      bottomRight: corner,
      topLeft: 0,
      topRight: 0,
    };
    const target = new ZQuadrilateralCornersBuilder(0);

    // Act.
    const actual = target.bottom(corner).build();

    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should set topLeft and bottomLeft for left", () => {
    // Arrange.
    const corner = 10;
    const expected: IZQuadrilateralCorners = {
      bottomLeft: corner,
      bottomRight: 0,
      topLeft: corner,
      topRight: 0,
    };
    const target = new ZQuadrilateralCornersBuilder(0);

    // Act.
    const actual = target.left(corner).build();

    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should set bottomRight and topRight for right", () => {
    // Arrange.
    const corner = 10;
    const expected: IZQuadrilateralCorners = {
      bottomLeft: 0,
      bottomRight: corner,
      topLeft: 0,
      topRight: corner,
    };
    const target = new ZQuadrilateralCornersBuilder(0);

    // Act.
    const actual = target.right(corner).build();

    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should set topLeft and topRight for top", () => {
    // Arrange.
    const corner = 10;
    const expected: IZQuadrilateralCorners = {
      bottomLeft: 0,
      bottomRight: 0,
      topLeft: corner,
      topRight: corner,
    };
    const target = new ZQuadrilateralCornersBuilder(0);

    // Act.
    const actual = target.top(corner).build();

    // Assert.
    expect(actual).toEqual(expected);
  });
});

describe("From", () => {
  const shouldOutputQuadrilateralCorners = (
    expected: IZQuadrilateralCorners,
    other: ZQuadrilateralCornersLike,
  ) => {
    // Arrange.
    const target = new ZQuadrilateralCornersBuilder(0);

    // Act.
    const actual = target.from(other).build();

    // Assert.
    expect(actual).toEqual(expected);
  };

  describe("Raw", () => {
    it("should set all sides", () => {
      const expected = new ZQuadrilateralCornersBuilder(10).build();
      shouldOutputQuadrilateralCorners(expected, 10);
    });
  });

  describe("Side", () => {
    it("should set the bottomLeft and bottomRight for bottom", () => {
      const expected = new ZQuadrilateralCornersBuilder(0).bottom(10).build();
      shouldOutputQuadrilateralCorners(expected, { bottom: 10 });
    });

    it("should set the bottomLeft and topLeft for left", () => {
      const expected = new ZQuadrilateralCornersBuilder(0).left(10).build();
      shouldOutputQuadrilateralCorners(expected, { left: 10 });
    });

    it("should set the bottomRight and topRight for right", () => {
      const expected = new ZQuadrilateralCornersBuilder(0).right(10).build();
      shouldOutputQuadrilateralCorners(expected, { right: 10 });
    });

    it("should set the topLeft and topRight for top", () => {
      const expected = new ZQuadrilateralCornersBuilder(0).top(10).build();
      shouldOutputQuadrilateralCorners(expected, { top: 10 });
    });
  });

  describe("Point", () => {
    it("should set bottomLeft", () => {
      const expected = new ZQuadrilateralCornersBuilder(0)
        .bottomLeft(10)
        .build();
      shouldOutputQuadrilateralCorners(expected, { bottomLeft: 10 });
    });

    it("should set bottomRight", () => {
      const expected = new ZQuadrilateralCornersBuilder(0)
        .bottomRight(10)
        .build();
      shouldOutputQuadrilateralCorners(expected, { bottomRight: 10 });
    });

    it("should set topLeft", () => {
      const expected = new ZQuadrilateralCornersBuilder(0).topLeft(10).build();
      shouldOutputQuadrilateralCorners(expected, { topLeft: 10 });
    });

    it("should set topRight", () => {
      const expected = new ZQuadrilateralCornersBuilder(0).topRight(10).build();
      shouldOutputQuadrilateralCorners(expected, { topRight: 10 });
    });
  });

  describe("Empty", () => {
    it("should keep the same values", () => {
      const expected = new ZQuadrilateralCornersBuilder(0).build();
      shouldOutputQuadrilateralCorners(expected, {});
    });

    it("should keep the same values for null", () => {
      const expected = new ZQuadrilateralCornersBuilder(0).build();
      shouldOutputQuadrilateralCorners(expected, null);
    });

    it("should keep the same values for undefined", () => {
      const expected = new ZQuadrilateralCornersBuilder(0).build();
      shouldOutputQuadrilateralCorners(expected, undefined);
    });
  });
});

describe("Copy", () => {
  it("should copy the corner values", () => {
    // Arrange.
    const expected = new ZQuadrilateralCornersBuilder(0)
      .bottomLeft(1)
      .bottomRight(2)
      .topLeft(3)
      .topRight(4)
      .build();
    const target = new ZQuadrilateralCornersBuilder(-1);

    // Act.
    const actual = target.copy(expected).build();

    // Assert.
    expect(actual).toEqual(expected);
  });
});
