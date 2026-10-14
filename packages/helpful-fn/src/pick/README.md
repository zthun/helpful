# Pick

[Back to Helpful Functions](../../README.md)

Copy selected enumerable own string-keyed properties into a new object.

## Exports

| Export               | Description                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `PickPredicate`      | Predicate type receiving a key and its value and returning a boolean.                                                     |
| `PickResult<T>`      | Result type declared as `Partial<T> \| null \| undefined`; the current pick functions return an object.                   |
| `pickBy`             | `pickBy(predicate, target)` copies entries whose key and value satisfy the predicate. Does not mutate the target.         |
| `pickDefined`        | `pickDefined(target)` keeps values other than null and undefined, including zero, false, and empty strings.               |
| `pickDataAttributes` | `pickDataAttributes(target)` keeps keys beginning with `data-`.                                                           |
| `pickEvents`         | `pickEvents(target)` keeps keys beginning with `on`. It checks the key prefix without validating the value as a function. |

## Usage

```ts
import { pickDataAttributes, pickDefined } from "@zthun/helpful-fn";

pickDefined({ name: "Ada", age: null, active: false });
// { name: "Ada", active: false }
pickDataAttributes({ "data-id": "123", title: "Example" });
// { "data-id": "123" }
```
