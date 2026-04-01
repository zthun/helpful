import { TZDate } from "@date-fns/tz";
import { parse, startOfToday } from "date-fns";

import { culture as culture$ } from "../culture/culture.mjs";
import { LocaleLookup } from "../culture/locale-lookup.mjs";
import type { ZDateTime, ZDateTimeOptions } from "../date/date-time.mjs";
import { ZDateFormats } from "./format-date.mjs";
import { userTimeZone } from "./timezone.mjs";

/**
 * Parses a string value back to a date format.
 *
 *
 * @param value -
 *        The value to parse
 * @param options -
 *        The options to parse with.  The most important option here is format.
 *        If the format is not specified, then the standard zoned ISO 8601
 *        format is used.  The timezone is also used in the case the date
 *        does not supply it for string values.  If the timezone is not specified
 *        then the users timezone is assumed.  Finally, the cultural local will
 *        default to the users current culture if not specified.
 *
 * @returns
 *        The date object parsed from the value.  Returns null
 *        if the value parsed with the given options results in an
 *        invalid date.
 */
export function parseDateTime(
  value: ZDateTime,
  options: ZDateTimeOptions<Date | null> = {},
): Date | null {
  const { fallback = null } = options;

  if (value == null) {
    return fallback;
  }

  if (typeof value === "number") {
    const candidate = new Date(value);
    return Number.isNaN(candidate.getTime()) ? fallback : candidate;
  }

  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? fallback : value;
  }

  const {
    format = ZDateFormats.Iso,
    culture = culture$(),
    timeZone = userTimeZone(),
  } = options;

  const locale = LocaleLookup[culture];
  const reference = new TZDate(startOfToday()).withTimeZone(timeZone);
  const result = parse(value, format, reference, { locale });

  return Number.isNaN(result.getTime()) ? fallback : result;
}
