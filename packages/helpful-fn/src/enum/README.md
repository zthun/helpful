# Enum

[Back to Helpful Functions](../../README.md)

Check enum values and associate them with display metadata.

## Exports

| Export                    | Description                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `isEnum`                  | `isEnum(enumeration, candidate)` is a type guard that checks whether a non-null string or number appears in `Object.values(enumeration)`. Numeric enums include reverse-mapping names in those values. |
| `IZEnumInfo<TEnum>`       | Metadata interface with a required `value` and optional `name`, `avatar`, and `description`.                                                                                                           |
| `ZEnumInfoBuilder<TEnum>` | Starts with a string or number value, provides fluent `name`, `avatar`, and `description` setters, and returns a shallow copy through `build()`.                                                       |

## Usage

```ts
import { isEnum, ZEnumInfoBuilder } from "@zthun/helpful-fn";

enum Status {
  Ready = "ready",
  Pending = "pending",
}
isEnum(Status, "ready"); // true
const info = new ZEnumInfoBuilder(Status.Ready)
  .name("Ready")
  .description("Available for use")
  .build();
```
