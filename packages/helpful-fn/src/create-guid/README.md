# Create Guid

[Back to Helpful Functions](../../README.md)

Generate random UUID strings.

## Exports

| Export       | Description                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| `createGuid` | `createGuid()` returns a new version 4 UUID string. It is an alias of the UUID library's `v4` function. |

## Usage

```ts
import { createGuid } from "@zthun/helpful-fn";

const id = createGuid(); // A UUID such as "53e33fb6-d05a-4fa9-8dc0-b78e4feaa702"
```
