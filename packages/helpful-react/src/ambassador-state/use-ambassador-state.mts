import { useState } from "react";

/**
 * A reducer function for the setter.
 */
export type ZAmbassadorReducerRequired<T> = (current: T) => T;

/**
 * A reducer function for the setter.
 */
export type ZAmbassadorReducer<T> = (current: T | undefined) => T;

/**
 * The type for setting the current value.
 */
export type ZAmbassadorSetCurrent<T> =
  ((val: T | ZAmbassadorReducer<T>) => void) | undefined;

/**
 * A type of state where the value is used from the props in the case of them being set.
 *
 * Otherwise, an internal set of properties are used.  This is useful in the case that you
 * want to allow properties to control the state of the component, but this functionality is
 * to be optional.
 *
 * @param current -
 *        The current value from the props.  If this is
 *        undefined, then the internal state is used.
 * @param setCurrent -
 *        The mutator method to set the current value.  This can
 *        be undefined, but if it is set, both the internal value and
 *        the prop value are set.
 * @param T -
 *        The type of data for the state.
 *
 * @returns
 *        A tuple where the first item is the current state and the 2nd item is a mutator
 *        method to modify the state.
 */
export function useAmbassadorState<T>(
  current: T | undefined,
  setCurrent: ZAmbassadorSetCurrent<T>,
): [T | undefined, (val: T | ZAmbassadorReducer<T>) => void];

/**
 * A type of state where the value is used from the props in the case of them being set.
 *
 * Otherwise, an internal set of properties are used.  This is useful in the case that you
 * want to allow properties to control the state of the component, but this functionality is
 * to be optional.
 *
 * @param current -
 *        The current value from the props.  If this is
 *        undefined, then the internal state is used.
 * @param setCurrent -
 *        The mutator method to set the current value.  This can
 *        be undefined, but if it is set, both the internal value and
 *        the prop value are set.
 * @param initial -
 *        The initial value to set if current is undefined.
 *
 * @returns
 *        A tuple where the first item is the current state and the 2nd item is a mutator
 *        method to modify the state.
 */
export function useAmbassadorState<T>(
  current: T | undefined,
  setCurrent: ZAmbassadorSetCurrent<T>,
  initial: T,
): [T, (val: T | ZAmbassadorReducerRequired<T>) => void];

/**
 * A type of state where the value is used from the props in the case of them being set.
 *
 * Otherwise, an internal set of properties are used.  This is useful in the case that you
 * want to allow properties to control the state of the component, but this functionality is
 * to be optional.
 *
 * @param current -
 *        The current value from the props.  If this is
 *        undefined, then the internal state is used.
 * @param setCurrent -
 *        The mutator method to set the current value.  This can
 *        be undefined, but if it is set, both the internal value and
 *        the prop value are set.
 * @param initial -
 *        The initial value to set if current is undefined.
 * @param T -
 *        The type of data for the state.
 *
 * @returns
 *        A tuple where the first item is the current state and the 2nd item is a mutator
 *        method to modify the state.
 */
export function useAmbassadorState<T>(
  current: T | undefined,
  setCurrent: ZAmbassadorSetCurrent<T>,
  initial?: T,
): [T | undefined, (val: T | ZAmbassadorReducer<T>) => void] {
  const [localCurrent, setLocalCurrent] = useState<T | undefined>(
    current || initial,
  );

  const _current = current === undefined ? localCurrent : current;

  const _setCurrent = (val: T | ZAmbassadorReducer<T>) => {
    setLocalCurrent(val);

    const isReducer = (
      v: T | ZAmbassadorReducer<T>,
    ): v is ZAmbassadorReducer<T> => typeof v === "function";

    if (setCurrent) {
      // There's no guarantee that this comes from a set state.
      // A simple event function may be passed, so if the actual val is a reducer, we'll go ahead
      // and expand here.
      const next = isReducer(val) ? val(_current) : val;
      setCurrent(next);
    }
  };

  return [_current, _setCurrent];
}
