# Function

[Back to Helpful Functions](../../README.md)

Describe functions that supply values without taking arguments. These exports
are TypeScript types.

## Exports

| Export              | Description                                        |
| ------------------- | -------------------------------------------------- |
| `ZSupplier<T>`      | A zero-argument function returning `T`: `() => T`. |
| `ZSupplierAsync<T>` | A zero-argument function returning `Promise<T>`.   |
| `ZSupplierMaybe<T>` | Either a value of type `T` or a `ZSupplier<T>`.    |

## Usage

```ts
import type {
  ZSupplier,
  ZSupplierAsync,
  ZSupplierMaybe,
} from "@zthun/helpful-fn";

const supplyName: ZSupplier<string> = () => "Ada";
const supplyNameAsync: ZSupplierAsync<string> = async () => "Ada";
const nameOrSupplier: ZSupplierMaybe<string> = supplyName;
```
