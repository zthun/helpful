# Sort

[Back to Helpful Query](../../README.md)

Build sort criteria, serialize them, and cycle a single-column sort.

## Exports

| Export             | Description                                                                                                                                                                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ZSortDirection`   | Enum with `Ascending = "asc"` and `Descending = "desc"`.                                                                                                                                                                                                                          |
| `ZSortDirections`  | Array of supported direction values.                                                                                                                                                                                                                                              |
| `IZSort`           | Sort criterion with a required `direction` and optional `subject` field path. An omitted subject represents the whole value when sorting data.                                                                                                                                    |
| `ZSortBuilder`     | Accumulates criteria with `sort`, replaces them with `sorts`, or appends through `ascending(subject?)` and `descending(subject?)`. `build()` returns a JSON copy.                                                                                                                 |
| `IZSorter`         | Interface exposing one-based `index(subject?)`, `sorted(subject?)`, and `sort(subject?)` methods.                                                                                                                                                                                 |
| `ZSorterSingle`    | Tracks at most one criterion, taking only the first initial criterion. `sort(subject?)` cycles ascending, descending, then unsorted; switching subjects starts ascending. `index` returns 1 for the current subject or -1 otherwise; `sorted` returns its direction or undefined. |
| `ZSortSerialize`   | `serialize(criteria)` returns `asc(name)` for one criterion or a parenthesized comma-separated list for several. Empty or nullish lists return undefined.                                                                                                                         |
| `ZSortDeserialize` | `deserialize(text)` parses sort expressions with optional outer parentheses. Throws when directions or nonempty subjects cannot be parsed.                                                                                                                                        |

Use explicit nonempty subjects for serialized criteria. The serializer writes an
omitted subject as the literal text `undefined`, and the parser rejects empty
subjects, so whole-value criteria do not round-trip through these helpers.

## Usage

```ts
import {
  ZSortBuilder,
  ZSortSerialize,
  ZSortDeserialize,
  ZSorterSingle,
} from "@zthun/helpful-query";

const sorts = new ZSortBuilder().ascending("name").descending("age").build();
const text = new ZSortSerialize().serialize(sorts);
// "(asc(name), desc(age))"
const parsed = new ZSortDeserialize().deserialize(text!);
const sorter = new ZSorterSingle();
sorter.sort("name"); // ascending
sorter.sort("name"); // descending
sorter.sort("name"); // []
```
