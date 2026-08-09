import { castSupplier } from "@zthun/helpful-fn";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";

/**
 * Represents a useState where changing the initial state resets the internal state.
 *
 * This is useful for form like flows where you internally keep track
 * of changes to data, commit the changes, and then want to reflect the new
 * updated state.
 *
 * @param initial -
 *        The initial state or a callback to retrieve the initial state.
 *        Please note that this is evaluated on every render, so if you
 *        are passing a supplier function, keep in mind that performance
 *        may be impacted if is expensive to evaluate.
 *
 * @returns
 *        A set state tuple where the first value is the current set value,
 *        and the 2nd value is a setter for the internal state.
 */
export function useSyncState<S>(
  initial: S | (() => S),
): [S, Dispatch<SetStateAction<S>>] {
  const _initial = castSupplier(initial)();
  const [value, setValue] = useState(initial);
  const [prev, setPrev] = useState(initial);

  if (_initial !== prev) {
    setPrev(_initial);
    setValue(_initial);
  }

  return [value, setValue];
}
