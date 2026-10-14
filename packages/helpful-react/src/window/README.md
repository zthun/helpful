# Window

[Back to Helpful React](../../README.md)

Access the global object through an overridable React context.

## Exports

| Export                  | Description                                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------------------- |
| `ZWindowServiceContext` | Context of type `typeof globalThis`, defaulting to the helpful-fn `$global` object.                         |
| `useWindowService`      | Returns the current context value, allowing consumers to use browser services through an injectable object. |

The default is `globalThis`. Browser-specific properties such as `location`
require a browser runtime or a provider supplying those properties.

## Usage

```ts
import { createElement } from "react";
import { useWindowService } from "@zthun/helpful-react";

export function CurrentLocation() {
  const windowService = useWindowService();
  return createElement("span", null, windowService.location.href);
}
```
