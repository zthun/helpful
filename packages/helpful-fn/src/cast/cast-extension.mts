import type { ZOptional } from "../optional/optional.mjs";

/**
 * Puts a . in front of name if one is not already there.
 *
 * If there are multiple dots in front of name, then
 * all dots but one is removed.
 *
 * @example
 *
 * ```ts
 * // Outputs .zip
 * castExtension('zip');
 *
 * // Outputs .zip
 * castExtension('.zip');
 *
 * // Outputs .zip
 * castExtension('...zip');
 * ```
 *
 * @param candidate -
 *        The candidate extension
 *
 * @returns
 *        The candidate prepended by a single dot.
 *        If candidate is undefined, null, the empty
 *        string, white space, or nothing but dots,
 *        then the empty string is returned.
 */
export function castExtension(candidate: ZOptional<string>): string {
  if (candidate == null) {
    return "";
  }

  const trimmed = candidate.trim();

  if (!trimmed) {
    return "";
  }

  const normalized = trimmed.replace(/^\.+/, "");

  if (!normalized) {
    return "";
  }

  return `.${normalized}`;
}
