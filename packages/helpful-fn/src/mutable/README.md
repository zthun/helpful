# Mutable

[Back to Helpful Functions](../../README.md)

Remove readonly modifiers from TypeScript object types. These types do not
modify runtime objects.

## Exports

| Export               | Description                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------- |
| `ZMutable<T>`        | Removes readonly modifiers from every top-level property of `T`.                             |
| `ZMutableKeys<T, K>` | Removes readonly modifiers only from the selected keys `K`, preserving the other properties. |

## Usage

```ts
import type { ZMutable, ZMutableKeys } from "@zthun/helpful-fn";

type User = { readonly id: number; readonly name: string };
const user: ZMutable<User> = { id: 1, name: "Ada" };
user.name = "Grace";
const editableName: ZMutableKeys<User, "name"> = { id: 1, name: "Ada" };
editableName.name = "Grace"; // id remains readonly
```
