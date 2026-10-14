# Assert

[Back to Helpful Functions](../../README.md)

Collect failed claims and throw an error after checking them all.

## Exports

| Export    | Description                                                                                                                                                                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ZAssert` | Start with `ZAssert.claim(condition, message)`, chain additional `claim` calls, and finish with `assert(errorFactory)`. The factory receives a single message for one failure or an array of messages for multiple failures. No error is thrown when all claims pass. |

## Usage

```ts
import { ZAssert, createError } from "@zthun/helpful-fn";

const user = { name: "Ada", email: "ada@example.com" };
ZAssert.claim(user.name.length > 0, "Name is required")
  .claim(user.email.length > 0, "Email is required")
  .assert(createError);
```
