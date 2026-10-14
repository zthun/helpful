# View State

[Back to Helpful React](../../README.md)

Load a page and its item count independently from a helpful-query data source.

## Exports

| Export                | Description                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `usePageViewState<T>` | `usePageViewState(dataSource, request)` returns `{ view, count, pages, size, page }`. View and count are asynchronous states. Reloads the view when the request or source reference changes, and reloads the count when the filter, search, or source changes. Falsy size defaults to infinity and falsy page defaults to 1. Page count uses a fallback item count of zero and a minimum of one page. |

Use the [async-state helpers](../async-state/README.md) to inspect loading and
error states. Keep source and request references stable to avoid unnecessary
reloads; replace the request rather than mutating it in place.

## Usage

```ts
import { usePageViewState, asStateData } from "@zthun/helpful-react";
import type { IZDataRequest, IZDataSource } from "@zthun/helpful-query";

export function useNamesPage(
  source: IZDataSource<string>,
  request: IZDataRequest,
) {
  const state = usePageViewState(source, request);
  return { ...state, names: asStateData(state.view, []) };
}
```
