# Cookie

[Back to Helpful Functions](../../README.md)

Describe cookies and construct cookie data with a fluent builder.

## Exports

| Export           | Description                                                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `IZCookie`       | Interface with required `name` and `value`, plus optional `domain`, `expires`, `secure`, `httpOnly`, and `sameSite` fields.        |
| `ZCookieBuilder` | Builder with `name`, `value`, `domain`, `expires`, `secure`, `httpOnly`, and `sameSite` setters. `build()` returns a shallow copy. |

`expires` accepts a date, a string, or undefined. Dates are converted with
`toJSON()`; strings are retained. `immortal()` clears the expiration and
`expiresTomorrow()` sets it to 24 hours from now. `MillisecondsOneDay` is the
builder's static 24-hour duration constant.

`lax()` and `strict()` set the SameSite policy. `allowCrossSite()` sets it to
`none` and enables the secure flag. `authentication(token?)` sets the name to
`Authentication`, enables secure and HTTP-only flags, sets expiration to
tomorrow, and optionally sets a token value. The builder constructs data;
writing or serializing the cookie is the caller's responsibility.

## Usage

```ts
import { ZCookieBuilder } from "@zthun/helpful-fn";

const cookie = new ZCookieBuilder()
  .name("theme")
  .value("dark")
  .expiresTomorrow()
  .secure()
  .lax()
  .build();
```
