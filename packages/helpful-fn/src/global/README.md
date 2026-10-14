# Global

[Back to Helpful Functions](../../README.md)

Access the global object without referring to DOM-specific globals.

## Exports

| Export    | Description                                                                             |
| --------- | --------------------------------------------------------------------------------------- |
| `$global` | Alias of `globalThis`, usable in browsers and Node.js. This is a value, not a function. |

## Usage

```ts
import { $global } from "@zthun/helpful-fn";

$global === globalThis; // true
```
