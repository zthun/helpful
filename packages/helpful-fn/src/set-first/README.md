# Set First

[Back to Helpful Functions](../../README.md)

Adapt an array of values to a setter that accepts one value.

## Exports

| Export     | Description                                                                                                                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `setFirst` | `setFirst(setValue, fallback, values)` calls the setter with the first array item, or the fallback when the array is empty, null, or undefined. A first item that is itself undefined is still passed through. Returns no value. |

## Usage

```ts
import { setFirst } from "@zthun/helpful-fn";

let selected = "none";
const setSelected = (value: string) => {
  selected = value;
};
setFirst(setSelected, "none", ["Ada", "Grace"]);
// selected is "Ada"
setFirst(setSelected, "none", []);
// selected is "none"
```
