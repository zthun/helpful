# Try

[Back to Helpful Functions](../../README.md)

Return fallbacks when operations throw, promises reject, or JSON input cannot be
parsed.

## Exports

| Export             | Description                                                                                                                                                                                                                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `tryFallback`      | `tryFallback(candidate, fallback?)` invokes a zero-argument function and returns its result. Synchronous exceptions return the fallback, which defaults to undefined. Promise rejections are not handled by this synchronous helper.                                                                                     |
| `tryFallbackAsync` | `tryFallbackAsync(candidate, fallback?)` invokes and awaits a promise-returning function. Synchronous exceptions and rejected promises resolve to the fallback, which defaults to undefined.                                                                                                                             |
| `tryJsonParse`     | `tryJsonParse(buffer, fallback = null)` parses JSON only when the first character is `{` or `[`. Nullish input, other initial characters, and parsing errors return the fallback. Leading whitespace and standalone JSON primitives are therefore not accepted. The generic type does not validate the parsed structure. |

## Usage

```ts
import { tryFallback, tryFallbackAsync, tryJsonParse } from "@zthun/helpful-fn";

tryFallback(() => {
  throw new Error("Failed");
}, "fallback"); // "fallback"
await tryFallbackAsync(async () => {
  throw new Error("Failed");
}, "fallback");
// "fallback"
tryJsonParse<{ name: string }>('{"name":"Ada"}'); // { name: "Ada" }
tryJsonParse("invalid", {}); // {}
```
