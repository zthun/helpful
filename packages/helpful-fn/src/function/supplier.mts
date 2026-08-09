/**
 * A function with no arguments that returns a value.
 */
export type ZSupplier<T> = () => T;

/**
 * A function with no arguments that returns a promise to a value.
 */
export type ZSupplierAsync<T> = ZSupplier<Promise<T>>;

/**
 * A value or supplier of a value.
 */
export type ZSupplierMaybe<T> = ZSupplier<T> | T;
