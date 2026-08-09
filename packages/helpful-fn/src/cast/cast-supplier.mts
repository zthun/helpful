import type { ZSupplier, ZSupplierMaybe } from "../function/supplier.mjs";

/**
 * Casts a value to a callback supplier function.
 *
 * Please note that if you force pass a function with arguments, the
 * same function is returned, even though that would not be a valid
 * supplier function.  This is mostly for named as castSupplier
 * for semantics and typescript checking.
 *
 * @param value -
 *        The value to cast to a supplier function.
 *
 * @returns
 *        The value as a guaranteed supplier.
 */
export function castSupplier<T>(value: ZSupplierMaybe<T>): ZSupplier<T> {
  return typeof value === "function" ? (value as ZSupplier<T>) : () => value;
}
