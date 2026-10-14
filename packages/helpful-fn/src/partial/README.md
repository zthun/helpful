# Partial

[Back to Helpful Functions](../../README.md)

Make nested properties optional at the TypeScript type level.

## Exports

| Export            | Description                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| `ZDeepPartial<T>` | Makes each property optional and recursively applies the same mapping when the property type extends `object`. |
| `DeepPartial<T>`  | Deprecated alias of `ZDeepPartial<T>`. Use `ZDeepPartial` for new code.                                        |

## Usage

```ts
import type { ZDeepPartial } from "@zthun/helpful-fn";

type User = { name: string; address: { city: string; country: string } };
const update: ZDeepPartial<User> = { address: { city: "Chicago" } };
```
