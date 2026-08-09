import { createError, sleep } from "@zthun/helpful-fn";
import type { DependencyList } from "react";
import { useEffect, useRef, useState } from "react";
import { defer, from, Subscription } from "rxjs";

/**
 * The value that will be set on an ZAsyncDataState when the data is being loaded.
 */
export const ZAsyncLoading = Symbol("loading");

/**
 * An async data state.
 *
 * An async data state can be in one of three possible states:
 * 1.  Loaded
 * 2.  Loading
 * 3.  Error
 */
export type ZAsyncDataState<T> = T | symbol | Error;

/**
 * A refresh / setter function for a state of data.
 */
export type ZAsyncUseData<T> = T | ((current: T) => T);

/**
 * A tuple where the first item is the current state of the data and the
 * 2nd item is a refresh function.
 *
 * The refresh function also acts as a setter function to force the
 * use of the data.
 */
export type ZAsyncDataTuple<T> = [
  ZAsyncDataState<T>,
  (val?: ZAsyncUseData<T>) => Promise<any>,
];

/**
 * Represents a hook to use async data.
 *
 * @param load -
 *        The load method for the data.
 * @param deps -
 *        The dependencies to force a refresh of the data.
 * @param T -
 *        The type of data that will eventually be given.
 *
 * @returns
 *        A tuple where the first item is the current state of the data and
 *        the 2nd argument is a refresh function to refresh the data.
 */
export function useAsyncState<T>(
  load: () => Promise<T>,
  deps: DependencyList = [],
): ZAsyncDataTuple<T> {
  const [current, setCurrent] = useState<ZAsyncDataState<T>>(ZAsyncLoading);
  const subscriptionRef = useRef<Subscription>(new Subscription());

  const _refresh = () => {
    subscriptionRef.current.unsubscribe();
    subscriptionRef.current = defer(() => {
      setCurrent(ZAsyncLoading);
      return from(load());
    }).subscribe({
      next: (v) => setCurrent(v),
      error: (e) => setCurrent(createError(e)),
    });
  };

  const refresh = async (useThisData?: T) => {
    if (useThisData !== undefined) {
      setCurrent(useThisData);
      return;
    }

    await sleep();
    return _refresh();
  };

  useEffect(
    () => {
      _refresh();
      return () => subscriptionRef.current.unsubscribe();
    },
    // eslint-disable-next-line @eslint-react/exhaustive-deps
    deps,
  );

  return [current, refresh];
}

/**
 * Gets whether data is loading.
 *
 * @param data -
 *        The data to check.
 * @param T -
 *        The type of data of the loaded state.
 *
 * @returns
 *        True if the data is in a loading state.
 */
export function isStateLoading<T>(data: ZAsyncDataState<T>): data is symbol {
  return data === ZAsyncLoading;
}

/**
 * Gets whether data has been loaded.
 *
 * @param data -
 *        The data to check.
 * @param T -
 *        The type of data of the loaded state.
 *
 * @returns
 *        True if the data is loaded.
 */
export function isStateLoaded<T>(data: ZAsyncDataState<T>): data is T {
  return !isStateLoading(data) && !isStateErrored(data);
}

/**
 * Gets whether data has errored.
 *
 * @param data -
 *        The data to check.
 * @param T -
 *        The type of data of the loaded state.
 *
 * @returns
 *        True if the data is in an error state.
 */
export function isStateErrored<T>(data: ZAsyncDataState<T>): data is Error {
  return data instanceof Error;
}

/**
 * Returns the loaded data.
 *
 * @param data -
 *        The data to retrieve.
 * @param T -
 *        The type of data of the loaded state.
 *
 * @returns
 *        This method returns data if it is loaded, or undefined
 *        if it is not.
 */
export function asStateData<T>(data: ZAsyncDataState<T>): T | undefined;
/**
 * Returns the loaded data.
 *
 * @param data -
 *        The data to retrieve.
 * @param fallback -
 *        The fallback to return in the case that data has not yet been loaded.
 * @param T -
 *        The type of data of the loaded state.
 *
 * @returns
 *        This method returns data if it is loaded, or fallback
 *        if it is not.
 */
export function asStateData<T>(data: ZAsyncDataState<T>, fallback: T): T;
/**
 * Returns the loaded data.
 *
 * @param data -
 *        The data to retrieve.
 * @param fallback -
 *        The fallback to return in the case that data has not yet been loaded.
 * @param T -
 *        The type of data of the loaded state.
 *
 * @returns
 *        This method returns data if it is loaded, or fallback
 *        if it is not.
 */
export function asStateData<T>(
  data: ZAsyncDataState<T>,
  fallback?: T,
): T | undefined {
  return isStateLoaded(data) ? data : fallback;
}

/**
 * Returns the data error.
 *
 * @param data -
 *        The data that has possibly errored.
 * @param T -
 *        The type of data of the loaded state.
 *
 * @returns
 *        The error that occurred or undefined if the data is
 *        loading or successful.
 */
export function asStateError<T>(data: ZAsyncDataState<T>): Error | undefined {
  return isStateErrored(data) ? data : undefined;
}
