# Purge

[Back to Helpful Functions](../../README.md)

Remove an explicitly undefined property from an object.

## Exports

| Export  | Description                                                                                                                                                                             |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `purge` | `purge(object, property)` deletes the property only when its value is exactly undefined. It mutates the supplied object, returns no value, and preserves null and other defined values. |

## Usage

```ts
import { purge } from "@zthun/helpful-fn";

const settings = { theme: "dark", label: undefined };
purge(settings, "label");
Object.keys(settings); // ["theme"]
```
