/**
 * Same as TypeScripts built in Required, and
 * makes it so all child objects are required as well.
 */
export type ZRequiredDeep<T> = Required<{
  [K in keyof T]: ZRequiredDeep<T[K]>;
}>;

/**
 * @deprecated Use ZRequiredDeep instead.
 */
export type RequiredDeep<T> = ZRequiredDeep<T>;
