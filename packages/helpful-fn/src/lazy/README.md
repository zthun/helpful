# Lazy

[Back to Helpful Functions](../../README.md)

Initialize an asynchronous value on demand and reuse its promise.

## Exports

| Export     | Description                                                                                                                                                                                                                                                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ZLazy<T>` | Construct with a zero-argument factory returning `Promise<T>`. `get()` invokes the factory when no promise is stored and caches its returned promise, including rejected promises. `initialized()` reports whether a promise has been stored. A factory that throws before returning a promise leaves the instance uninitialized. |

## Usage

```ts
import { ZLazy } from "@zthun/helpful-fn";

const name = new ZLazy(async () => "Ada");
name.initialized(); // false
await name.get(); // "Ada"
name.initialized(); // true
await name.get(); // "Ada", without calling the factory again
```
