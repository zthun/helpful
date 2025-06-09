import type { IZDataMatch } from "./data-match.mjs";

/**
 * Represents a data match that forwards to an inner match if the filter is null or undefined.
 *
 * @param TData -
 *        The type of data being matched.
 * @param TFilter -
 *        The type of filter performing the match.
 */
export class ZDataMatchOptional<TData, TFilter>
  implements IZDataMatch<TData, TFilter | undefined | null>
{
  /**
   * Initializes a new instance of this object.
   *
   * @param _match -
   *        The inner match object which does not support
   *        null or undefined filters.
   */
  public constructor(private _match: IZDataMatch<TData, TFilter>) {}

  /**
   * Gets whether the given data matches the given filter.
   *
   * @param data -
   *        The data to check.
   * @param filter -
   *        The filter to match against.
   *
   * @returns
   *        True if filter is null or undefined.  Otherwise,
   *        the result from the inner match with data and filter
   *        is returned.
   */
  public match(data: TData, filter: TFilter | undefined | null): boolean {
    if (filter == null) {
      return true;
    }

    return this._match.match(data, filter);
  }
}
