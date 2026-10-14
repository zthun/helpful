# Empty

[Back to Helpful Functions](../../README.md)

Check for nullish values and objects with no enumerable own string keys.

## Exports

| Export          | Description                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isEmptyObject` | `isEmptyObject(candidate)` returns true for null, undefined, or an object whose `Object.keys` result is empty. Empty arrays and objects such as dates also pass this check; empty strings do not. Symbol and non-enumerable properties are not counted. |

## Usage

```ts
import { isEmptyObject } from "@zthun/helpful-fn";

isEmptyObject({}); // true
isEmptyObject(null); // true
isEmptyObject([]); // true
isEmptyObject(""); // false
isEmptyObject({ name: "Ada" }); // false
```
