import { TZDate } from "@date-fns/tz";
import { formatDate } from "date-fns";

import { culture as culture$ } from "../culture/culture.mjs";
import { LocaleLookup } from "../culture/locale-lookup.mjs";
import type { ZDateTime, ZDateTimeOptions } from "../date/date-time.mjs";
import { guessDateTime } from "./guess-date.mjs";
import { userTimeZone } from "./timezone.mjs";

/**
 * Basic date formats that are common for storage and usage.
 */
export enum ZDateFormats {
  /**
   * Standard {@link https://en.wikipedia.org/wiki/ISO_8601 | ISO-8601} format with date only.
   *
   * Using this should imply midnight user timezone.
   */
  IsoDateOnly = `yyyy-MM-dd`,
  /**
   * Standard {@link https://en.wikipedia.org/wiki/ISO_8601 | ISO-8601} format with time only.
   */
  IsoTimeOnly = `HH:mm:ss.SSS`,
  /**
   * Standard {@link https://en.wikipedia.org/wiki/ISO_8601 | ISO-8601} format without timezone specifier.
   */
  IsoNoTimeZone = `${IsoDateOnly}'T'${IsoTimeOnly}`,
  /**
   * Standard {@link https://en.wikipedia.org/wiki/ISO_8601 | ISO-8601} format.
   */
  Iso = `${IsoNoTimeZone}XX`,
  /**
   * Users local date (locale specific).
   */
  LocalDate = "P",
  /**
   * User local time (locale specific).
   */
  LocalTime = "p",
  /**
   * Date and time formatted with user specific locale.
   */
  LocalDateTime = "Pp",
}

/**
 * Formats a given value.
 *
 * @param value -
 *        The value to format.
 * @param options -
 *        The given options for the format.
 *
 * @returns
 *        If value is null or undefined, then the empty string is returned.
 *        If value is a string, then the date is guessed from the string and
 *        reformatted to the format specified by options.  Otherwise,
 *        the date or number specified by value is formatted to the culture,
 *        timezone, and format specified in the options.
 */
export function formatDateTime(
  value: ZDateTime,
  options: ZDateTimeOptions<string> = {},
): string {
  const {
    format = ZDateFormats.LocalDateTime,
    culture = culture$(),
    timeZone = userTimeZone(),
    fallback = "",
  } = options;

  let date: Date | null;

  if (value == null) {
    date = null;
  } else if (typeof value === "string") {
    date = guessDateTime(value, { ...options, fallback: null });
  } else {
    date = new Date(value);
  }

  if (date == null || Number.isNaN(date.getTime())) {
    return fallback;
  }

  const withTz = new TZDate(date, timeZone);

  return formatDate(withTz, format, {
    locale: LocaleLookup[culture],
  });
}
