export type PickPredicate = (
  key: number | string | symbol,
  value: any,
) => boolean;

export type PickResult<T> = Partial<T> | null | undefined;

/**
 * A function that reduces an object to keys and values that match a predicate.
 *
 * @param predicate -
 *        The predicate to match the key and value against.
 * @param target -
 *        The object to reduce.
 *
 * @returns
 *        A reduced object that only contains key-value pairs that match
 *        the predicate.
 */
export function pickBy<T = unknown>(
  predicate: PickPredicate,
  target: object,
): PickResult<T> {
  const keys = Object.keys(target);
  const reduced = {};

  keys.forEach((key) => {
    const value = target[key];
    if (predicate(key, value)) {
      reduced[key] = value;
    }
  });

  return reduced;
}

/**
 * An alias to pickBy with a predicate of (_, v) =&gt; v != null.
 *
 * @param target -
 *        The target object to reduce.
 *
 * @returns
 *        The reduced object.
 */
export function pickDefined<T = unknown>(target: object): PickResult<T> {
  return pickBy((_, v) => v != null, target);
}

/**
 * An alias to pickBy((k) =&gt; k.startsWith('data-')).
 *
 * @param target -
 *        The target object to reduce.
 *
 * @returns
 *        The reduced object.
 */
export function pickDataAttributes<T = unknown>(target: object): PickResult<T> {
  return pickBy((k) => String(k).startsWith("data-"), target);
}

/**
 * An alias to pickBy((k) =&gt; k.startsWith('on')).
 *
 * @param target -
 *        The target object to reduce.
 *
 * @returns
 *        The reduced object.
 */
export function pickEvents<T = unknown>(target: object): PickResult<T> {
  return pickBy((k) => String(k).startsWith("on"), target);
}
