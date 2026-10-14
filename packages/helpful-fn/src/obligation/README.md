# Obligation

[Back to Helpful Functions](../../README.md)

Resolve values or promises while enforcing required values or applying optional
fallbacks.

## Exports

| Export               | Description                                                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ZObligatedValue<T>` | A value, null, undefined, or a promise resolving to any of those.                                                                                                              |
| `required`           | `required(value)` returns a promise of the non-null value. Throws when the input or resolved value is null or undefined, and propagates rejected promises.                     |
| `optional`           | `optional(value, fallback?)` returns a promise of the value, or the fallback for nullish inputs, nullish resolved values, and rejected promises. The default fallback is null. |

## Usage

```ts
import { optional, required } from "@zthun/helpful-fn";

await required(Promise.resolve("Ada")); // "Ada"
await optional<string>(null, "Guest"); // "Guest"
await optional(Promise.reject(new Error("Unavailable")), "Guest"); // "Guest"
```
