# Filter

[Back to Helpful Query](../../README.md)

Build, evaluate, serialize, and parse filters for object fields or whole values.

## Exports

| Export                        | Description                                                                                                                                                                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IZFilter`                    | Union of binary, collection, logic, and unary filter shapes.                                                                                                                                                                                      |
| `IZFilterMetadata`            | Base interface containing the `__type__` discriminator.                                                                                                                                                                                           |
| `IZFilterOperator<TOperator>` | Extends filter metadata with an `operator`.                                                                                                                                                                                                       |
| `IZFilterSubject<TOperator>`  | Extends the operator interface with a string `subject` field path.                                                                                                                                                                                |
| `ZOperatorFilter`             | Union of all filter operator enum types.                                                                                                                                                                                                          |
| `ZOperatorsFilter`            | Combined array of all supported filter operators.                                                                                                                                                                                                 |
| `IZFilterBinary`              | Subject filter with a single comparison `value`.                                                                                                                                                                                                  |
| `ZOperatorBinary`             | Binary operators: `Equal` (`eq`), `NotEqual` (`neq`), `LessThanEqualTo` (`lteq`), `LessThan` (`lt`), `GreaterThanEqualTo` (`gteq`), `GreaterThan` (`gt`), `Like` (`like`), `StartsWith` (`sw`), and `EndsWith` (`ew`).                            |
| `ZOperatorsBinary`            | Array of binary operator values.                                                                                                                                                                                                                  |
| `ZFilterBinaryBuilder`        | Sets `subject`, `value`, and `operator`. Fluent shortcuts are `equal`, `notEqual`, `lessThan`, `lessThanEqualTo`, `greaterThan`, `greaterThanEqualTo`, `like`, `startsWith`, and `endsWith`. `build()` returns a shallow copy with type `binary`. |
| `isBinaryFilter`              | Type guard checking the `binary` discriminator; does not validate the entire filter shape.                                                                                                                                                        |
| `isBinaryOperator`            | Type guard checking membership in the binary operator values.                                                                                                                                                                                     |
| `ZBinaryComparators`          | Map from binary operators to comparison functions. Equality is strict; text containment, prefix, and suffix comparisons stringify values and are case-sensitive.                                                                                  |
| `IZFilterCollection`          | Subject filter with an array of comparison `values`.                                                                                                                                                                                              |
| `ZOperatorCollection`         | Collection operators: `In` (`in`) and `NotIn` (`not-in`).                                                                                                                                                                                         |
| `ZOperatorsCollection`        | Array of collection operator values.                                                                                                                                                                                                              |
| `ZFilterCollectionBuilder`    | Sets `subject`, `values`, and `operator`; adds one value with `value`; selects an operator with `in` or `notIn`. `build()` returns a JSON copy with type `collection`.                                                                            |
| `isCollectionFilter`          | Type guard checking the `collection` discriminator.                                                                                                                                                                                               |
| `isCollectionOperator`        | Type guard checking membership in the collection operator values.                                                                                                                                                                                 |
| `ZCollectionComparators`      | Map of membership functions using array `indexOf` to find the data value.                                                                                                                                                                         |
| `IZFilterLogic`               | Composite filter with an operator and child `clauses`.                                                                                                                                                                                            |
| `ZOperatorLogic`              | Logic operators: `And` (`and`) and `Or` (`or`).                                                                                                                                                                                                   |
| `ZOperatorsLogic`             | Array of logic operator values.                                                                                                                                                                                                                   |
| `ZFilterLogicBuilder`         | Sets `operator` or uses `and` and `or`; adds a `clause` or replaces `clauses`. `build()` returns a shallow copy with type `logic`, sharing the clauses array.                                                                                     |
| `isLogicFilter`               | Type guard checking the `logic` discriminator.                                                                                                                                                                                                    |
| `isLogicOperator`             | Type guard checking membership in the logic operator values.                                                                                                                                                                                      |
| `IZFilterUnary`               | Subject filter that tests a value without a separate comparison value.                                                                                                                                                                            |
| `ZOperatorUnary`              | Unary operators: `IsNull` (`null`) and `IsNotNull` (`is-not-null`).                                                                                                                                                                               |
| `ZOperatorsUnary`             | Array of unary operator values.                                                                                                                                                                                                                   |
| `ZFilterUnaryBuilder`         | Sets `subject` and `operator`, or uses `isNull` and `isNotNull`. `build()` returns a shallow copy with type `unary`.                                                                                                                              |
| `isUnaryFilter`               | Type guard checking the `unary` discriminator.                                                                                                                                                                                                    |
| `isUnaryOperator`             | Type guard checking membership in the unary operator values.                                                                                                                                                                                      |
| `ZUnaryComparators`           | Map of nullish checks: null and undefined both match `IsNull`.                                                                                                                                                                                    |
| `ZDataFilterFields<TData>`    | `match(data, filter)` evaluates filters. A nonempty subject is resolved as a field path; an empty subject targets the whole value. Logic clauses recurse using every clause for AND or any clause for OR.                                         |
| `ZFilterSerialize`            | `serialize(filter)` outputs operator expressions such as `eq(name, "Ada")`; null, undefined, or unrecognized filter types return undefined.                                                                                                       |
| `ZFilterDeserialize`          | `deserialize(text)` parses an operator expression into a filter and throws on syntax errors or trailing text.                                                                                                                                     |

Expressions use `operator(subject, value)` for binary filters,
`operator(subject, value1, value2)` for collection filters, `operator(subject)`
for unary filters, and `and(filter1, filter2)` or `or(filter1, filter2)` for
logic. Binary and collection values are parsed as JSON.

The parser splits binary and collection arguments on commas, so values
containing commas, including JSON arrays and objects, are not generally safe to
round-trip. Use object builders when values require those structures. Filter
guards check the `__type__` discriminator rather than validating every field.

## Usage

```ts
import {
  ZDataFilterFields,
  ZFilterBinaryBuilder,
  ZFilterLogicBuilder,
  ZFilterDeserialize,
  ZFilterSerialize,
} from "@zthun/helpful-query";

const name = new ZFilterBinaryBuilder()
  .subject("name")
  .equal()
  .value("Ada")
  .build();
const age = new ZFilterBinaryBuilder()
  .subject("age")
  .greaterThanEqualTo()
  .value(18)
  .build();
const filter = new ZFilterLogicBuilder().and().clause(name).clause(age).build();
new ZDataFilterFields().match({ name: "Ada", age: 30 }, filter); // true
const text = new ZFilterSerialize().serialize(filter);
// 'and(eq(name, "Ada"), gteq(age, 18))'
const parsed = new ZFilterDeserialize().deserialize(text!);
```
