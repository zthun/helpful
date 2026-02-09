import { isEnum } from "../enum/is-enum.mjs";

/**
 * Attempts to cast the candidate to an enumeration value.
 *
 * @param enumeration -
 *        The enumeration type.
 * @param candidate -
 *        The candidate to cast to the enum type.
 *
 * @returns
 *        The candidate if candidate represents the enumeration type,
 *        or undefined in the case that it does not.
 */
export function castEnum<TEnum extends Record<string, string | number>>(
  enumeration: TEnum,
  candidate: unknown,
): TEnum[keyof TEnum] | undefined;

/**
 * Attempts to cast the candidate to an enumeration value.
 *
 * @param enumeration -
 *        The enumeration type.
 * @param candidate -
 *        The candidate to cast to the enum type.
 * @param fallback -
 *        The fallback to use in the case that candidate
 *        cannot represent the enumeration type.
 *
 * @returns
 *        The candidate if candidate represents the enumeration type,
 *        or fallback in the case that it does not.
 */
export function castEnum<TEnum extends Record<string, string | number>>(
  enumeration: TEnum,
  candidate: unknown,
  fallback: TEnum[keyof TEnum],
): TEnum[keyof TEnum];

/**
 * Attempts to cast the candidate to an enumeration value.
 *
 * @param enumeration -
 *        The enumeration type.
 * @param candidate -
 *        The candidate to cast to the enum type.
 * @param fallback -
 *        The fallback to use in the case that candidate
 *        cannot represent the enumeration type.
 *
 * @returns
 *        The candidate if candidate represents the enumeration type,
 *        or fallback in the case that it does not.
 */
export function castEnum<TEnum extends Record<string, string | number>>(
  enumeration: TEnum,
  candidate: unknown,
  fallback?: TEnum[keyof TEnum],
): TEnum[keyof TEnum] | undefined {
  return isEnum(enumeration, candidate) ? candidate : fallback;
}
