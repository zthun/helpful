# Culture

[Back to Helpful Functions](../../README.md)

Discover the current locale and the locale codes supported by the package's date
helpers.

## Exports

| Export     | Description                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `culture`  | `culture()` returns the locale reported by `Intl.DateTimeFormat().resolvedOptions().locale`.                                               |
| `cultures` | `cultures()` returns supported date-helper locale codes: `en-AU`, `en-CA`, `en-GB`, `en-IE`, `en-IN`, `en-NZ`, `en-US`, `en-ZA`, and `ja`. |

`LocaleLookup` in `locale-lookup.mts` maps these codes to date-fns locales. It
is an internal helper and is not exported from the package entry point.

## Usage

```ts
import { culture, cultures } from "@zthun/helpful-fn";

const currentLocale = culture();
const supportedLocales = cultures();
```
