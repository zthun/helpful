# Async State

[Back to Helpful React](../../README.md)

Load asynchronous data and distinguish loading, loaded, and error states.

## Exports

| Export               | Description                                                                                                                                                                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ZAsyncLoading`      | Symbol used as the loading sentinel.                                                                                                                                                                                                                                              |
| `ZAsyncDataState<T>` | Union of data `T`, a symbol, or an `Error`.                                                                                                                                                                                                                                       |
| `ZAsyncUseData<T>`   | Declared refresh input type: data or a reducer from current data to next data.                                                                                                                                                                                                    |
| `ZAsyncDataTuple<T>` | Tuple of asynchronous data state and a promise-returning refresh/setter function.                                                                                                                                                                                                 |
| `useAsyncState<T>`   | `useAsyncState(load, deps = [])` loads on mount and when dependencies change. Returns `[state, refresh]`. `refresh()` schedules a reload; `refresh(value)` directly sets a defined value. Loading failures are converted to errors. Unsubscribes from prior loads and on unmount. |
| `isStateLoading`     | Type guard checking equality with `ZAsyncLoading`.                                                                                                                                                                                                                                |
| `isStateLoaded`      | Type guard returning true when the state is neither the loading sentinel nor an error.                                                                                                                                                                                            |
| `isStateErrored`     | Type guard checking `instanceof Error`.                                                                                                                                                                                                                                           |
| `asStateData`        | Returns loaded data or a supplied fallback, defaulting to undefined.                                                                                                                                                                                                              |
| `asStateError`       | Returns an error state or undefined.                                                                                                                                                                                                                                              |

Awaiting `refresh()` waits for reload scheduling, not completion of the loader.
Unsubscribing prevents stale results from updating state but does not cancel the
underlying promise. A direct value update does not unsubscribe a pending load.

Although the exported refresh input type includes reducers, the implementation
passes supplied values directly to React's state setter. A reducer can therefore
receive the loading sentinel or an error; use direct data values when the
current state may not be loaded.

## Usage

```ts
import { createElement } from "react";
import {
  useAsyncState,
  isStateLoading,
  isStateErrored,
} from "@zthun/helpful-react";

export function Greeting({ load }: { load: () => Promise<string> }) {
  const [name] = useAsyncState(load, [load]);
  if (isStateLoading(name)) return createElement("p", null, "Loading...");
  if (isStateErrored(name)) return createElement("p", null, name.message);
  return createElement("p", null, `Hello ${name}`);
}
```
