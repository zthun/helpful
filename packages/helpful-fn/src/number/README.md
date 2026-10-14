# Number

[Back to Helpful Functions](../../README.md)

Describe numeric values and values that may be converted to numbers.

## Exports

| Export        | Description                                                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `ZNumberLike` | Type alias for `number \| string \| bigint`. This type does not validate whether a string is numeric or perform any conversion. |

## Usage

```ts
import { castNumber } from "@zthun/helpful-fn";
import type { ZNumberLike } from "@zthun/helpful-fn";

const input: ZNumberLike = "42";
const value = castNumber(input); // 42
```
