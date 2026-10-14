# Match

[Back to Helpful Query](../../README.md)

Define matching strategies and adapt them to optional filters.

## Exports

| Export                               | Description                                                                                                            |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `IZDataMatch<TData, TFilter>`        | Interface exposing `match(data, filter): boolean`.                                                                     |
| `ZDataMatchAlways`                   | Matching implementation whose `match()` always returns true.                                                           |
| `ZDataMatchOptional<TData, TFilter>` | Wraps another matcher. Null or undefined filters match every item; other filters are forwarded to the wrapped matcher. |

## Usage

```ts
import { ZDataMatchOptional, ZDataSearchText } from "@zthun/helpful-query";

const match = new ZDataMatchOptional(new ZDataSearchText());
match.match("Ada", undefined); // true
match.match("Ada", "ad"); // true
match.match("Ada", "grace"); // false
```
