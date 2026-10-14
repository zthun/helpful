# Sync State

[Back to Helpful React](../../README.md)

Keep editable local state synchronized with changes to an initial value.

## Exports

| Export            | Description                                                                                                                                                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `useSyncState<S>` | `useSyncState(initial)` returns a React state/setter tuple. Local edits are preserved while the initial value stays the same. When the initial value changes according to `Object.is`, local state resets to that new value. |

Objects are compared by reference. Keep initial object references stable when
you want to preserve local edits across renders.

## Usage

```ts
import { useSyncState } from "@zthun/helpful-react";

export function useDraft(initialName: string) {
  const [name, setName] = useSyncState(initialName);
  return { name, setName };
}
```
