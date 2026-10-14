# Required

[Back to Helpful Functions](../../README.md)

Require nested properties or selected keys at the TypeScript type level.

## Exports

| Export                | Description                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ZRequiredDeep<T>`    | Recursively applies `Required` so nested properties are required as well.                                      |
| `ZRequiredPick<T, P>` | Intersects `T` with `Required<Pick<T, P>>`, requiring the selected keys while preserving the other properties. |
| `RequiredDeep<T>`     | Deprecated alias of `ZRequiredDeep<T>`.                                                                        |
| `RequiredPick<T, P>`  | Deprecated alias of `ZRequiredPick<T, P>`.                                                                     |

## Usage

```ts
import type { ZRequiredDeep, ZRequiredPick } from "@zthun/helpful-fn";

type Settings = { theme?: string; panel?: { visible?: boolean } };
const full: ZRequiredDeep<Settings> = {
  theme: "dark",
  panel: { visible: true },
};
const themed: ZRequiredPick<Settings, "theme"> = { theme: "dark" };
```
