/**
 * A specific set of possible values that need to be checked for requirements.
 *
 * @param T -
 *        The type of value that is being checked.
 */
export type ZObligatedValue<T> =
  T | null | undefined | Promise<T | null | undefined>;

/**
 * Requires a value to be non null.
 *
 * @param val -
 *        The value to require.  This can be a promise
 *        that can return null or undefined in addition to the
 *        value.
 * @param T -
 *        The type of value that is being checked.
 *
 * @returns
 *        This method returns val if it is not null
 *        or undefined, otherwise, an error is thrown.
 *
 * @throws
 *        An error if the value is null or undefined.
 */
export async function required<T>(val: ZObligatedValue<T>): Promise<T> {
  if (val == null) {
    throw new Error("A required value was not provided");
  }

  const _val = await val;

  if (_val == null) {
    throw new Error("A required value was not provided");
  }

  return _val;
}

/**
 * Allows a value to be null or undefined and has a fallback.
 *
 * @param val -
 *        The value to check.  This can be a promise
 *        that can return null or undefined in addition to the
 *        value.
 * @param fallback -
 *        The fallback value in the case that val is
 *        null or undefined.
 * @param T -
 *        The type of value that is being checked.
 *
 * @returns
 *        This method returns val if it is not null
 *        or undefined, otherwise, the fallback is returned.
 *        If val is a promise and rejects, then fallback is
 *        also returned.
 */
export function optional<T>(val: ZObligatedValue<T>, fallback: T): Promise<T>;

/**
 * Allows a value to be null or undefined and has a fallback.
 *
 * @param val -
 *        The value to check.  This can be a promise
 *        that can return null or undefined in addition to the
 *        value.
 * @param T -
 *        The type of value that is being checked.
 *
 * @returns
 *        This method returns val if it is not null
 *        or undefined, otherwise, null is returned.
 *        If val is a promise and rejects, then null is
 *        also returned.
 */
export function optional<T>(val: ZObligatedValue<T>): Promise<T | null>;

/**
 * Allows a value to be null or undefined and has a fallback.
 *
 * @param val -
 *        The value to check.  This can be a promise
 *        that can return null or undefined in addition to the
 *        value.
 * @param fallback -
 *        The fallback value in the case that val is
 *        null or undefined.
 * @param T -
 *        The type of value that is being checked.
 *
 * @returns
 *        This method returns val if it is not null
 *        or undefined, otherwise, the fallback is returned.
 *        If val is a promise and rejects, then fallback is
 *        also returned.
 */
export async function optional<T>(
  val: ZObligatedValue<T>,
  fallback: T | null = null,
): Promise<T | null> {
  if (val == null) {
    return fallback;
  }

  try {
    const _val = await val;
    return _val == null ? fallback : _val;
  } catch {
    return fallback;
  }
}
