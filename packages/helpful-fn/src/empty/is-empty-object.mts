/**
 * Returns true if an object is empty, null, or undefined.
 *
 * Note that this is different than lodash's isEmpty method.
 * Checking an empty array or empty string will result
 * in false.
 *
 * @param candidate -
 *        The object to test.
 *
 * @returns
 *        True if candidate is the empty object or
 *        null.  False otherwise.
 */
export function isEmptyObject(candidate: any): candidate is {} {
  const candidateType = typeof candidate;

  return (
    candidate == null ||
    (candidateType === "object" && Object.keys(candidate).length === 0)
  );
}
