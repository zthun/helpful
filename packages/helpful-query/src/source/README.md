# Source

[Back to Helpful Query](../../README.md)

Request, count, and retrieve data through the source pattern, including an
in-memory implementation.

## Exports

| Export                               | Description                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IZDataRequest`                      | Optional `page`, `size`, `search`, `filter`, and `sort` fields. Page numbering starts at one.                                                                                                                                                                                                                                                              |
| `IZDataRequestQuery`                 | String-valued versions of request fields for URL query parameters.                                                                                                                                                                                                                                                                                         |
| `ZDataRequestBuilder`                | Sets request fields. `page` clamps to at least 1 and `size` to at least 0; undefined clears either. `filter` and `sort` accept objects or serialized strings; parsing errors leave their values undefined. `query` applies supplied string fields; invalid numeric strings retain the existing numeric values. `copy` and `build` use JSON copies.         |
| `IZDataSource<T>`                    | Interface exposing asynchronous `count(request)` and `retrieve(request)`. Count ignores pagination; retrieve returns the requested page.                                                                                                                                                                                                                   |
| `ZDataSourceStatic<T>`               | Construct with an array, a promise of an array, an error, or a promise of an error. `count` searches and filters; `retrieve` also sorts and paginates, defaulting to page 1 and unlimited size. Errors reject the operations. `items` returns an array copy; `insert`, `remove`, `removeAt`, and `set` return promises of new sources with updated arrays. |
| `IZDataSourceStaticOptions<T>`       | Required search matcher, filter matcher, and response delay in milliseconds.                                                                                                                                                                                                                                                                               |
| `ZDataSourceStaticOptionsBuilder<T>` | Sets `search`, `filter`, and `delay`; `build` returns a shallow copy. Defaults to a matcher that accepts every search, field-based filtering, and zero delay.                                                                                                                                                                                              |

Search is ignored by the default static-source options. Supply a search matcher
to enable it. The delay schedules each response independently; it does not
combine or cancel requests. Item arrays are copied, but their objects are
shared. `remove` matches the first item by identity using `indexOf`.

`data-results.mts` also exports source-module helpers `paginate`, `filter`, and
`sort`. They are internal to the source implementation and are not re-exported
from the package entry point. `paginate` selects a one-based page, `filter`
applies a matcher while accepting nullish filters, and `sort` orders an array
copy by the supplied criteria.

## Usage

```ts
import {
  ZDataRequestBuilder,
  ZDataSourceStatic,
  ZDataSourceStaticOptionsBuilder,
  ZDataSearchFields,
  ZSortBuilder,
} from "@zthun/helpful-query";

type User = { name: string };
const options = new ZDataSourceStaticOptionsBuilder<User>()
  .search(new ZDataSearchFields<User>(["name"]))
  .build();
const source = new ZDataSourceStatic(
  [{ name: "Ada" }, { name: "Grace" }],
  options,
);
const request = new ZDataRequestBuilder()
  .page(1)
  .size(10)
  .search("ad")
  .sort(new ZSortBuilder().ascending("name").build())
  .build();
await source.count(request); // 1
await source.retrieve(request); // [{ name: "Ada" }]
```
