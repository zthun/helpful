# Optional

[Back to Helpful Functions](../../README.md)

Express nullability in TypeScript types.

## Exports

| Export         | Description                        |
| -------------- | ---------------------------------- |
| `ZNullable<T>` | Union of `T` and null.             |
| `ZOptional<T>` | Union of `T`, null, and undefined. |

## Usage

```ts
import type { ZNullable, ZOptional } from "@zthun/helpful-fn";

const noName: ZNullable<string> = null;
const missingName: ZOptional<string> = undefined;
```
