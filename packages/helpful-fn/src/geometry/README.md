# Geometry

[Back to Helpful Functions](../../README.md)

Describe points, sides, and corners, and calculate rectangle dimensions and
placement.

## Exports

| Export                                         | Description                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IZPoint2d<T>`, `IZPoint3d<T>`                 | Point interfaces with `x` and `y`, plus `z` for three-dimensional points. The coordinate type defaults to number.                                                                                                                                                                                                                         |
| `IZQuadrilateral<T>`                           | Four side values: `bottom`, `left`, `right`, and `top`. The value type defaults to number.                                                                                                                                                                                                                                                |
| `ZQuadrilateralLike<T>`                        | A scalar, partial point, partial quadrilateral, null, or undefined accepted by the side builder.                                                                                                                                                                                                                                          |
| `ZQuadrilateralBuilder<T>`                     | Initializes all sides with a starting value. Sets individual sides or pairs through `x` and `y`; supports `from`, `copy`, and `build`. `from` uses provided non-null side or axis values and retains existing values for missing fields. `build` returns a structured clone.                                                              |
| `IZQuadrilateralCorners<T>`                    | Four corner values: `bottomLeft`, `bottomRight`, `topLeft`, and `topRight`.                                                                                                                                                                                                                                                               |
| `ZCornersVertical<T>`, `ZCornersHorizontal<T>` | Partial vertical (`top`, `bottom`) or horizontal (`left`, `right`) corner-group inputs.                                                                                                                                                                                                                                                   |
| `ZQuadrilateralCornersLike<T>`                 | A scalar, grouped corner input, partial corner object, null, or undefined accepted by the corner builder.                                                                                                                                                                                                                                 |
| `ZQuadrilateralCornersBuilder<T>`              | Initializes all corners with a starting value. Sets individual corners or side pairs; supports `from`, `copy`, and `build`. Missing or null fields in `from` retain existing values. `copy` and `build` use structured clones.                                                                                                            |
| `ZRectangle`                                   | Wraps numeric sides and calculates `width()`, `height()`, and `area()`. `point(anchor)` and nine named anchor methods return coordinates. `attach(anchor, candidate, candidateAnchor)` aligns rectangles at anchor points; `offsetToFit(candidate)` shifts a rectangle inside the bounds or centers it along dimensions too large to fit. |

The side builder's `from` method does not support nested quadrilateral or point
values as its generic scalar type. For rectangles, width is `right - left` and
height is `bottom - top`; values are not normalized if the sides are reversed.

The nine named anchor methods are `topLeft`, `topCenter`, `topRight`,
`middleLeft`, `middleCenter`, `middleRight`, `bottomLeft`, `bottomCenter`, and
`bottomRight`.

## Usage

```ts
import { ZQuadrilateralBuilder, ZRectangle } from "@zthun/helpful-fn";

const sides = new ZQuadrilateralBuilder(0).right(100).bottom(50).build();
const rectangle = new ZRectangle(sides);
rectangle.width(); // 100
rectangle.height(); // 50
rectangle.area(); // 5000
rectangle.middleCenter(); // { x: 50, y: 25 }
```
