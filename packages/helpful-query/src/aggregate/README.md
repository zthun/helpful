# Aggregate

[Back to Helpful Query](../../README.md)

Represent named aggregate results such as counts, totals, or averages.

## Exports

| Export                 | Description                                                                                                                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IZAggregate<T>`       | Interface with an `id` and a result `value` of type `T`.                                                                                                                                                                            |
| `ZAggregateBuilder<T>` | Starts with `{ id: "zero", value: 0 }`. `id` changes the identifier; `value` returns a new builder with an inferred value type; `count` sets the identifier to `count` and supplies a number. `build()` returns a structured clone. |

## Usage

```ts
import { ZAggregateBuilder } from "@zthun/helpful-query";

const count = new ZAggregateBuilder().count(42).build();
// { id: "count", value: 42 }
const total = new ZAggregateBuilder().id("total").value(99).build();
```
