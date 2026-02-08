import { LocaleLookup } from "./locale-lookup.mjs";

/**
 * Returns the users current culture (locale).
 *
 * @returns
 *        The current locale.
 */
export function culture() {
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  return locale;
}

/**
 * Returns all supported cultures.
 *
 * @returns
 *        A list of currently supported culture codes.
 */
export function cultures() {
  return Object.keys(LocaleLookup);
}
