/**
 * Same as typescripts built in Partial and
 * also makes it so all child objects are also Partial.
 */
export type ZDeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? ZDeepPartial<T[P]> : T[P];
};

/**
 * @deprecated Use ZDeepPartial instead.
 */
export type DeepPartial<T> = ZDeepPartial<T>;
