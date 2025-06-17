import type { IZSort, ZSortDirection } from "./sort.mjs";

/**
 * Represents a sorter algorithm that can help with building sorts based on common techniques.
 */
export interface IZSorter {
  /**
   * Gets the current sort index for the subject or -1 if it is not sorted.
   *
   * This should be 1 based.
   *
   * @param subject -
   *        The subject to sort.  If this is undefined, the subject
   *        should be considered the empty string (the object itself).
   *
   * @returns
   *        The current sort index.
   */
  index(subject?: string): number;

  /**
   * Gets the current direction that the subject is sorted.
   *
   * @param subject -
   *        The subject to check.  Undefined is considered the
   *        empty string (the object itself).
   */
  sorted(subject?: string): ZSortDirection | undefined;

  /**
   * Sorts a specific subject.
   *
   * @param subject -
   *        The subject to sort.  Undefined is considered the
   *        empty string.
   *
   * @returns
   *        The updated sort list.
   */
  sort(subject?: string): IZSort[];
}
