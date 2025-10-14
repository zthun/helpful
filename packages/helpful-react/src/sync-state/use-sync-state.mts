import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";

/**
 * Represents a useState where changing the initial state resets the internal state.
 *
 * This is useful for form like flows where you internally keep track
 * of changes to data, commit the changes, and then want to reflect the new
 * updated state.
 *
 * @param initial -
 *        The initial state or a callback to retrieve the initial state.
 *
 * @returns
 *        A set state tuple where the first value is the current set value,
 *        and the 2nd value is a setter for the internal state.
 */
export function useSyncState<S>(
  initial: S | (() => S),
): [S, Dispatch<SetStateAction<S>>] {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    setValue(initial);
  }, [initial]);

  return [value, setValue];
}
