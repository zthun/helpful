/**
 * Attempts to cast candidate to a number.
 *
 * This method assumes you want an actual number and
 * not NaN.  In the case that candidate results in
 * NaN, then the fallback condition applies.
 *
 * @param candidate -
 *        The candidate to cast.
 *
 * @returns
 *        The casted number or undefined in the cast
 *        that casting candidate would result in NaN.
 */
export function castNumber(candidate: unknown): number | undefined;

/**
 * Attempts to cast candidate to a number.
 *
 * This method assumes you want an actual number and
 * not NaN.  In the case that candidate results in
 * NaN, then the fallback condition applies.
 *
 * @param candidate -
 *        The candidate to cast.
 * @param fallback -
 *        The fallback value in the case that the result
 *        of casting candidate would result in NaN
 *
 * @returns
 *        The casted number or fallback in the cast
 *        that casting candidate would result in NaN.
 */
export function castNumber(candidate: unknown, fallback: number): number;

/**
 * Attempts to cast candidate to a number.
 *
 * This method assumes you want an actual number and
 * not NaN.  In the case that candidate results in
 * NaN, then the fallback condition applies.
 *
 * @param candidate -
 *        The candidate to cast.
 * @param fallback -
 *        The fallback value in the case that the result
 *        of casting candidate would result in NaN
 *
 * @returns
 *        The casted number or fallback in the cast
 *        that casting candidate would result in NaN.
 */
export function castNumber(
  candidate: unknown,
  fallback?: number,
): number | undefined {
  try {
    const casted = Number(candidate);
    return Number.isNaN(casted) ? fallback : casted;
  } catch {
    return fallback;
  }
}
