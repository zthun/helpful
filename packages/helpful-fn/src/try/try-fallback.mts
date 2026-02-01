/**
 * Invokes the candidate function and returns undefined if an error is thrown from it.
 *
 * @param candidate -
 *        The candidate function to run.
 *
 * @returns
 *        The result from candidate.  Returns undefined if candidate throws an Error.
 */
export function tryFallback<T>(candidate: () => T): T | undefined;

/**
 * Invokes the candidate function and returns fallback if an error is thrown from it.
 *
 * @param candidate -
 *        The candidate function to run.
 * @param fallback -
 *        The fallback value to return if candidate throws an error.
 *
 * @returns
 *        The result from candidate.  Returns fallback if candidate throws an Error.
 */
export function tryFallback<T>(candidate: () => T, fallback: T): T;

/**
 * Invokes the candidate function and returns fallback if an error is thrown from it.
 *
 * @param candidate -
 *        The candidate function to run.
 * @param fallback -
 *        The fallback value to return if candidate throws an error.
 *
 * @returns
 *        The result from candidate.  Returns fallback if candidate throws an Error.
 *        If no fallback value is provided, then undefined is returned.
 */
export function tryFallback<T>(
  candidate: () => T,
  fallback?: T,
): T | undefined {
  try {
    return candidate();
  } catch {
    return fallback;
  }
}

/**
 * Invokes the candidate function and returns undefined if an rejected promise is returned from it.
 *
 * @param candidate -
 *        The candidate function to run.
 *
 * @returns
 *        A promise that resolves with the result from candidate.  Returns undefined
 *        if candidate returns a rejected promise.
 */
export function tryFallbackAsync<T>(
  candidate: () => Promise<T>,
): Promise<T | undefined>;

/**
 * Invokes the candidate function and returns undefined if an rejected promise is returned from it.
 *
 * @param candidate -
 *        The candidate function to run.
 * @param fallback -
 *        The fallback value that will be returned if candidate returns a rejected promise.
 *
 * @returns
 *        A promise that resolves with the result from candidate.  Returns fallback
 *        if candidate returns a rejected promise.
 */
export function tryFallbackAsync<T>(
  candidate: () => Promise<T>,
  fallback: T,
): Promise<T>;

/**
 * Invokes the candidate function and returns undefined if an rejected promise is returned from it.
 *
 * @param candidate -
 *        The candidate function to run.
 * @param fallback -
 *        The optional fallback value to return if the candidate throws an Error.
 *
 * @returns
 *        A promise that resolves with the result from candidate or fallback
 *        if candidate returns a rejected promise.  Resolves with undefined
 *        if no fallback is provided.
 */
export async function tryFallbackAsync<T>(
  candidate: () => Promise<T>,
  fallback?: T,
): Promise<T | undefined> {
  try {
    return await candidate();
  } catch {
    return fallback;
  }
}
