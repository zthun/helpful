import { castArray } from "lodash-es";
import { useState } from "react";

export type ZStateAsArrayReducer<T> = (val: T[]) => T | T[];

export type ZSetStateAsArray<T> = (
  val: T | undefined | (T | undefined)[] | ZStateAsArrayReducer<T>,
) => void;

/**
 * A helpful hook for when you can have a single value or array value and
 * you always need an array value.
 *
 * @param initial -
 *        The initial value.  Note that the default for undefined
 *        values is the empty array.
 *
 * @returns
 *        A state tuple where the first item is the current value
 *        cast to an array, and the second item is the setter for
 *        the value.
 */
export function useStateAsArray<T>(
  initial?: T | T[],
): [T[], ZSetStateAsArray<T>] {
  const [value, setValue] = useState<T[]>(() =>
    initial == null ? [] : castArray(initial),
  );

  const _setValue = (val: T | T[] | ZStateAsArrayReducer<T>) => {
    const valueIsReducer = (val: any): val is ZStateAsArrayReducer<T> =>
      typeof val === "function";

    if (valueIsReducer(val)) {
      setValue((v: T[]) => castArray(val(v)).slice());
    } else {
      setValue(castArray(val).slice());
    }
  };

  return [value, _setValue];
}
