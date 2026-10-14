# State As Array

[Back to Helpful React](../../README.md)

Keep component state in array form while accepting single values or arrays.

## Exports

| Export                    | Description                                                                                                                                                                                                                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ZStateAsArrayReducer<T>` | Reducer from the current array to a single value or another array.                                                                                                                                                                                                                                   |
| `ZSetStateAsArray<T>`     | Setter type accepting a value, undefined, an array that may include undefined, or a reducer.                                                                                                                                                                                                         |
| `useStateAsArray<T>`      | `useStateAsArray(initial?)` returns `[array, setter]`. Nullish initial values become an empty array; single values become one-item arrays. Setter results are normalized with lodash `castArray` and copied with `slice`. Passing undefined to the setter creates `[undefined]`, not an empty array. |

## Usage

```ts
import { useStateAsArray } from "@zthun/helpful-react";

export function useSelection() {
  const [selected, setSelected] = useStateAsArray<string>("Ada");
  const addGrace = () => setSelected((current) => [...current, "Grace"]);
  const clear = () => setSelected([]);
  return { selected, addGrace, clear };
}
```
