/**
 * A type that can be T or null.
 *
 * @param T -
 *        The type that can also be null.
 */
export type ZNullable<T> = T | null;
/**
 * A type that can be T or null or undefined.
 *
 * @param T -
 *        The type that is optional.
 */
export type ZOptional<T> = ZNullable<T> | undefined;
