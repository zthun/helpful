# Page

[Back to Helpful Query](../../README.md)

Represent a page of items together with the total item count.

## Exports

| Export            | Description                                                                                                                                                                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IZPage<T>`       | Interface with total `count` across all pages and a `data` array for the current page.                                                                                                                                                                                                                |
| `ZPageBuilder<T>` | Starts with zero count and an empty array. `data` returns a new builder with the inferred item type; `count` sets the total. `all` sets data and count together, `singleton` creates a one-item data set, and `empty` clears both. `copy` and `build` copy the array while retaining item references. |

## Usage

```ts
import { ZPageBuilder } from "@zthun/helpful-query";

const page = new ZPageBuilder().data(["Ada", "Grace"]).count(20).build();
// { count: 20, data: ["Ada", "Grace"] }
const all = new ZPageBuilder().all([1, 2, 3]).build();
// { count: 3, data: [1, 2, 3] }
```
