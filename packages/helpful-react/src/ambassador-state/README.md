# Ambassador State

[Back to Helpful React](../../README.md)

Support either externally controlled state or local component state.

## Exports

| Export                          | Description                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ZAmbassadorReducerRequired<T>` | Reducer taking a current `T` and returning the next `T`.                                                                                                                                                                                                                                                                                       |
| `ZAmbassadorReducer<T>`         | Reducer whose current value may be undefined.                                                                                                                                                                                                                                                                                                  |
| `ZAmbassadorSetCurrent<T>`      | Optional callback accepting a value or reducer.                                                                                                                                                                                                                                                                                                |
| `useAmbassadorState`            | `useAmbassadorState(current, setCurrent, initial?)` returns a state/setter tuple. Uses the supplied current value whenever it is not undefined, otherwise uses local state. Its setter updates local state and forwards a resolved value to the optional callback. Supplying an initial value selects the overload with a required state type. |

Local state is initially seeded with `current || initial`, so a falsy controlled
value uses the initial value for that local seed. The returned controlled value
still uses an explicit undefined check. Reducers should be pure because local
and external updates can evaluate them separately.

## Usage

```ts
import { createElement } from "react";
import { useAmbassadorState } from "@zthun/helpful-react";

type Props = { value?: string; onChange?: (value: string) => void };
export function NameInput({ value, onChange }: Props) {
  const [name, setName] = useAmbassadorState(value, onChange, "");
  return createElement("input", {
    value: name,
    onChange: (event: { target: { value: string } }) =>
      setName(event.target.value),
  });
}
```
