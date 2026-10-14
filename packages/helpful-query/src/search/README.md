# Search

[Back to Helpful Query](../../README.md)

Match text using case-insensitive substring searches.

## Exports

| Export                     | Description                                                                                                                                                                                                                                                                       |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ZDataSearchText`          | `match(data, search)` converts the data to text and compares uppercase representations for substring containment.                                                                                                                                                                 |
| `ZDataSearchFields<TData>` | Construct with optional field paths. `match(data, search)` succeeds if any selected field contains the search text, ignoring case. Without explicit fields, uses the object's enumerable own string keys. Field paths use lodash `get`, and falsy field values become empty text. |

## Usage

```ts
import { ZDataSearchFields, ZDataSearchText } from "@zthun/helpful-query";

new ZDataSearchText().match("Hello Ada", "ADA"); // true
const search = new ZDataSearchFields<{ name: string; city: string }>(["name"]);
search.match({ name: "Ada", city: "Chicago" }, "ad"); // true
```
