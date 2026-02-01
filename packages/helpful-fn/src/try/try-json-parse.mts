import type { ZNullable, ZOptional } from "../optional/optional.mjs";
import { tryFallback } from "./try-fallback.mjs";

/**
 * Attempts to parse the string buffer as json.
 *
 * This is similar to JSON.parse, but instead of throwing
 * an error, it returns null.
 *
 * @param buffer
 *        The string buffer that may be json.
 *
 * @returns
 *        The parsed value of the buffer when parsed as JSON. If
 *        buffer is null, undefined, or does not represent valid
 *        JSON, then null is returned.
 */
export function tryJsonParse<T = unknown>(
  buffer: ZOptional<string>,
): ZNullable<T>;

/**
 * Attempts to parse the string buffer as json.
 *
 * This is similar to JSON.parse, but instead of throwing
 * an error, it returns a fallback value.
 *
 * @param buffer -
 *        The string buffer that may be json.
 * @param fallback -
 *        The fallback value in the case that buffer
 *        cannot be parsed.  Note that parsing the text
 *        "null" will return null instead of the fallback.
 *
 * @returns
 *        The parsed value of the buffer when parsed as JSON. If
 *        buffer is null, undefined, or does not represent valid
 *        JSON, then fallback is returned.
 */
export function tryJsonParse<T>(buffer: ZOptional<string>, fallback: T): T;

/**
 * Attempts to parse the string buffer as json.
 *
 * This is similar to JSON.parse, but instead of throwing
 * an error, it returns the fallback.
 *
 * @param buffer -
 *        The string buffer that may be json.
 * @param fallback -
 *        The fallback value in the case that buffer
 *        cannot be parsed.  Note that parsing the text
 *        "null" will return null instead of the fallback.
 *        The default value for this is null.
 *
 * @returns
 *        The parsed value of the buffer when parsed as JSON. If
 *        buffer is null, undefined, or does not represent valid
 *        JSON, then the fallback is returned.
 */
export function tryJsonParse<T = unknown>(
  buffer: ZOptional<string>,
  fallback: ZNullable<T> = null,
): ZNullable<T> {
  if (buffer == null) {
    return fallback;
  }

  // This is not really necessary because it is handled in the
  // JSON.parse method, but this avoids parsing random binary data.
  // If someone tries to read a buffer that's 300MB, there's no point
  // trying to parse it if it's just random binary data.  This can
  // still happen if the first binary character is { or [, but
  // most situations won't have this happen.
  const [firstChar] = buffer;

  if (firstChar !== "{" && firstChar !== "[") {
    return fallback;
  }

  return tryFallback(() => JSON.parse(buffer), fallback);
}
