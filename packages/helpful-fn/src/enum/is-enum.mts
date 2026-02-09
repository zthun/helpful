/**
 * Gets whether the candidate can represent an enumeration object of type TEnum.
 *
 * This is mostly helpful for type guarding value options in a type.
 *
 * @param enumeration -
 *        The enumeration object that contains the values.
 * @param candidate -
 *        The candidate to check.
 *
 * @returns
 *        True if candidate can represents one of the white listed
 *        object values in enumeration.
 */
export function isEnum<TEnum extends Record<string, string | number>>(
  enumeration: TEnum,
  candidate: unknown,
): candidate is TEnum[keyof TEnum] {
  return (
    candidate != null &&
    (typeof candidate === "string" || typeof candidate === "number") &&
    Object.values(enumeration).includes(candidate)
  );
}
