/**
 * A combination of Required and Pick.
 */
export type ZRequiredPick<T, P extends keyof T> = T & Required<Pick<T, P>>;

/**
 * @deprecated Use ZRequiredPick instead.
 */
export type RequiredPick<T, P extends keyof T> = ZRequiredPick<T, P>;
