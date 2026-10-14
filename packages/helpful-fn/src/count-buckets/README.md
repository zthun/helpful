# Count Buckets

[Back to Helpful Functions](../../README.md)

Calculate how many buckets or pages are needed for a number of items.

## Exports

| Export         | Description                                                                                                                                                                                                                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `countBuckets` | `countBuckets(weight, items, min = 0, max = Infinity)` rounds the number of required buckets up and bounds it by the minimum and maximum. Negative weight and item counts are treated as zero. Zero items returns `min`; `NaN` in either input returns `NaN`. Infinite capacity needs one bucket for nonzero items, subject to the bounds. |

## Usage

```ts
import { countBuckets } from "@zthun/helpful-fn";

countBuckets(25, 101); // 5 pages
countBuckets(25, 0, 1); // 1 page (minimum)
countBuckets(25, 101, 0, 4); // 4 pages (maximum)
```
