# Anchor

[Back to Helpful Functions](../../README.md)

Define anchor points for alignment and positioning in two-dimensional space.

## Exports

| Export              | Description                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------- |
| `ZVerticalAnchor`   | Enum with `Top`, `Middle`, and `Bottom` values.                                          |
| `ZHorizontalAnchor` | Enum with `Left`, `Center`, and `Right` values.                                          |
| `ZAnchor`           | Tuple of `[ZVerticalAnchor, ZHorizontalAnchor]`. The vertical anchor comes first.        |
| `ZSideAnchor`       | Union of the four outer sides: top, bottom, left, and right. Excludes middle and center. |

## Usage

```ts
import { ZHorizontalAnchor, ZVerticalAnchor } from "@zthun/helpful-fn";
import type { ZAnchor } from "@zthun/helpful-fn";

const topCenter: ZAnchor = [ZVerticalAnchor.Top, ZHorizontalAnchor.Center];
```
