# Join Defined

[Back to Helpful Functions](../../README.md)

Join values into strings while omitting nullish values and conditionally
excluded items.

## Exports

| Export                      | Description                                                                                                                                                                                                            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `JoinListInputParameter<T>` | A value, a `[value, include]` tuple, null, or undefined.                                                                                                                                                               |
| `joinDefined`               | `joinDefined(delimiter, ...items)` excludes null and undefined and includes tuple values only when their condition is truthy. Other values, including zero and false, are joined using normal array string conversion. |
| `spaceJoinDefined`          | Calls `joinDefined` with a space delimiter.                                                                                                                                                                            |
| `cssJoinDefined`            | Alias of `spaceJoinDefined`, useful for conditional CSS class names.                                                                                                                                                   |
| `commaJoinDefined`          | Calls `joinDefined` with a comma delimiter, without an added space.                                                                                                                                                    |
| `semiColonJoinDefined`      | Calls `joinDefined` with a semicolon delimiter.                                                                                                                                                                        |
| `pipeJoinDefined`           | Calls `joinDefined` with a pipe delimiter.                                                                                                                                                                             |

## Usage

```ts
import { cssJoinDefined, joinDefined } from "@zthun/helpful-fn";

joinDefined(",", "a", null, ["b", false], ["c", true]); // "a,c"
cssJoinDefined("button", ["active", true], undefined); // "button active"
```
