# First Where

[Back to Helpful Functions](../../README.md)

Select the first matching value from an argument list, with a fallback.

## Exports

| Export         | Description                                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `firstWhere`   | `firstWhere(predicate, fallback, first, ...remaining)` returns the first candidate matching the predicate or the fallback if none match.                     |
| `firstDefined` | `firstDefined(fallback, first, ...remaining)` selects the first value that is neither null nor undefined. Zero, false, and empty strings are preserved.      |
| `firstTruthy`  | `firstTruthy(fallback, first, ...remaining)` selects the first truthy value, skipping values such as zero, false, empty strings, null, undefined, and `NaN`. |

## Usage

```ts
import { firstDefined, firstTruthy, firstWhere } from "@zthun/helpful-fn";

firstWhere<number>((value) => value != null && value > 10, 0, 3, 12, 20); // 12
firstDefined(99, null, 0, 5); // 0
firstTruthy(99, null, 0, 5); // 5
```
