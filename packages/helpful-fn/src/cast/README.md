# Cast

[Back to Helpful Functions](../../README.md)

Normalize values into enum values, file extensions, numbers, or supplier
functions.

## Exports

| Export          | Description                                                                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `castEnum`      | `castEnum(enumeration, candidate, fallback?)` returns the candidate if `isEnum` accepts it; otherwise returns the fallback, which defaults to `undefined`.                                                                                     |
| `castExtension` | `castExtension(candidate)` trims whitespace and normalizes leading dots to one dot. Returns an empty string for null, undefined, empty text, or text containing only dots after trimming.                                                      |
| `castNumber`    | `castNumber(candidate, fallback?)` converts using `Number`. Returns the fallback, which defaults to `undefined`, if conversion throws or produces `NaN`. Other JavaScript conversions still apply: null becomes zero and infinity is accepted. |
| `castSupplier`  | `castSupplier(value)` returns functions unchanged and wraps other values in a zero-argument function. It does not check whether an existing function requires arguments.                                                                       |

## Usage

```ts
import {
  castEnum,
  castExtension,
  castNumber,
  castSupplier,
} from "@zthun/helpful-fn";

enum Status {
  Ready = "ready",
  Pending = "pending",
}
castEnum(Status, "unknown", Status.Pending); // "pending"
castExtension("...zip"); // ".zip"
castNumber("42", 0); // 42
castSupplier("ready")(); // "ready"
```
