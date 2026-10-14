# Create Error

[Back to Helpful Functions](../../README.md)

Convert error responses and other problem values into JavaScript errors.

## Exports

| Export        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createError` | `createError(problem, schema?)` returns existing `Error` instances unchanged. Null and undefined produce an error with no message. For other values, it checks own properties in schema order, then recursively extracts the first match; otherwise it uses `String(problem)` as the message. The default schema is `message`, `error`, `exception`, then `data`. A custom schema applies to the initial lookup; recursive lookups use the default schema. |

## Usage

```ts
import { createError } from "@zthun/helpful-fn";

const error = createError({ error: { message: "Request failed" } });
error.message; // "Request failed"
createError({ issue: "Invalid input" }, ["issue"]).message; // "Invalid input"
```
