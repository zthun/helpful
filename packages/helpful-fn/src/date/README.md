# Date

[Back to Helpful Functions](../../README.md)

Parse, guess, and format date values with locale and timezone options.

## Exports

| Export                | Description                                                                                                                                                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ZDateTime`           | Input type accepting a string, `Date`, number of milliseconds since the Unix epoch, null, or undefined.                                                                                                                                                             |
| `ZDateTimeOptions<T>` | Options for `format`, `supportedFormats`, `culture`, `timeZone`, and a fallback of type `T`.                                                                                                                                                                        |
| `ZDateFormats`        | Enum of formatting patterns: `IsoDateOnly`, `IsoTimeOnly`, `IsoNoTimeZone`, `Iso`, `LocalDate`, `LocalTime`, and `LocalDateTime`.                                                                                                                                   |
| `formatDateTime`      | `formatDateTime(value, options?)` formats a date or timestamp, or guesses a string before formatting it. Defaults to `LocalDateTime`, the current locale and timezone, and an empty-string fallback for missing or invalid dates.                                   |
| `parseDateTime`       | `parseDateTime(value, options?)` parses strings using `options.format`, which defaults to `ZDateFormats.Iso`. Valid dates pass through and numbers become dates. Missing or invalid dates return `options.fallback`, which defaults to null.                        |
| `guessDateTime`       | `guessDateTime(value, options?)` tries `supportedFormats` in order, defaulting to all `ZDateFormats` values, and returns the first non-null parse result. Use the default null fallback while trying formats so a non-null fallback does not stop the search early. |
| `userTimeZone`        | `userTimeZone()` returns the timezone reported by `Intl.DateTimeFormat`.                                                                                                                                                                                            |
| `timeZones`           | `timeZones()` returns `Intl.supportedValuesOf("timeZone")` from the current runtime.                                                                                                                                                                                |

The default locale and timezone come from the current runtime. Locale support
for these helpers is described in the
[culture documentation](../culture/README.md). Format strings use date-fns
patterns. Invalid format patterns may throw rather than return the date
fallback.

`ZCalendarMonth` in `calendar-month.mts` defines zero-based month indices from
`January = 0` to `December = 11`. It is exported by that source module but is
not re-exported from the package entry point.

## Usage

```ts
import { formatDateTime, parseDateTime, ZDateFormats } from "@zthun/helpful-fn";

const date = parseDateTime("2026-10-13", {
  format: ZDateFormats.IsoDateOnly,
  timeZone: "UTC",
});
formatDateTime(date, {
  format: ZDateFormats.IsoDateOnly,
  timeZone: "UTC",
}); // "2026-10-13"
```
