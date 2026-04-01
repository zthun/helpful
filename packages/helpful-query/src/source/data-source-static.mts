import type { IZDataRequest } from "./data-request.mjs";
import { filter, paginate, sort } from "./data-results.mjs";
import type { IZDataSource } from "./data-source.mjs";
import type { IZDataSourceStaticOptions } from "./data-source-static-options.mjs";
import { ZDataSourceStaticOptionsBuilder } from "./data-source-static-options.mjs";

/**
 * Represents an in memory data source.
 *
 * This is very useful for testing and when you
 * need to cache a data set that you already have.
 */
export class ZDataSourceStatic<T> implements IZDataSource<T> {
  /**
   * Initializes a new instance of this object.
   *
   * @param _data -
   *        The static data to search, sort, filter, and paginate.
   * @param _options -
   *        The options for the static source.
   */
  public constructor(
    private _data: T[] | Promise<T[]> | Error | Promise<Error>,
    private _options: IZDataSourceStaticOptions<T> = new ZDataSourceStaticOptionsBuilder().build(),
  ) {}

  /**
   * Gets a copy of the current list of items.
   *
   * This is equivalent to invoking retrieve
   * with the default data request.
   *
   * @returns
   *      A shallow copy of the current item list.
   *      Returns a rejected promise if the initial
   *      data is an error.
   */
  public async items(): Promise<T[]> {
    const data = await this._data;

    if (data instanceof Error) {
      return Promise.reject(data);
    }

    return data.slice();
  }

  /**
   * Inserts an item into the existing data array.
   *
   * @param item -
   *        The item to insert.
   * @param index -
   *        The index to insert at.  If this is equal to or less than 0
   *        Then the item will be inserted at the front of the data list.
   *        If this is greater than or equal to the maximum number of
   *        items in the current list, then the item will be inserted
   *        at the end of the list.
   *
   * @returns
   *        A new data source where the item list has been updated to include
   *        the new item.
   */
  public async insert(
    item: T,
    index = Infinity,
  ): Promise<ZDataSourceStatic<T>> {
    const items = await this.items();
    index = Math.max(index, 0);
    items.splice(index, 0, item);
    return new ZDataSourceStatic(items, this._options);
  }

  /**
   * Removes a specific matched item in the list.
   *
   * @param item -
   *        The item to remove.  This will be an exact match.
   *
   * @returns
   *        A new data source with the item removed, or a direct
   *        copy if no such item exists within the list. Returns
   *        a rejected promise if the original data is an error.
   */
  public async remove(item: T): Promise<ZDataSourceStatic<T>> {
    const items = await this.items();
    const index = items.indexOf(item);

    if (index >= 0) {
      items.splice(index, 1);
    }

    return new ZDataSourceStatic(items, this._options);
  }

  /**
   * Removes a specific item at a given index.
   *
   * @param index -
   *        The index of the item to remove.
   *
   * @returns
   *        A new data source with the item at the given index
   *        removed, or a direct copy if the index is out
   *        of range.  Returns a rejected promise if the
   *        original data is an Error.
   */
  public async removeAt(index: number): Promise<ZDataSourceStatic<T>> {
    const items = await this.items();

    if (index >= 0 && index < items.length) {
      items.splice(index, 1);
    }

    return new ZDataSourceStatic(items, this._options);
  }

  /**
   * Updates an item at the given index.
   *
   * @param item -
   *        The item to set.
   * @param index -
   *        The index of the item to replace.
   *
   * @returns
   *        A new data source with the item at the given index
   *        updated, or a direct copy if the index is out
   *        of range.  Returns a rejected promise if the
   *        original data is an Error.
   *
   */
  public async set(item: T, index: number): Promise<ZDataSourceStatic<T>> {
    const items = await this.items();

    if (index >= 0 && index < items.length) {
      items[index] = item;
    }

    return new ZDataSourceStatic(items, this._options);
  }

  public async count(request: IZDataRequest): Promise<number> {
    const { search: _search, filter: _filter } = request;
    const data = await this._data;

    if (data instanceof Error) {
      return new Promise((_, reject) =>
        setTimeout(() => reject(data), this._options.delay),
      );
    }

    let arr: T[] = data;
    arr = filter(arr, _search, this._options.search);
    arr = filter(arr, _filter, this._options.filter);
    return new Promise((resolve) =>
      setTimeout(() => resolve(arr.length), this._options.delay),
    );
  }

  public async retrieve(request: IZDataRequest): Promise<T[]> {
    const {
      page = 1,
      size = Infinity,
      search: _search,
      filter: _filter,
      sort: _sort,
    } = request;
    const data = await this._data;

    if (data instanceof Error) {
      return new Promise((_, reject) =>
        setTimeout(() => reject(data), this._options.delay),
      );
    }

    let arr: T[] = data;
    arr = filter(arr, _search, this._options.search);
    arr = filter(arr, _filter, this._options.filter);
    arr = sort(arr, _sort);
    arr = paginate(arr, page, size);

    return new Promise((resolve) =>
      setTimeout(() => resolve(arr), this._options.delay),
    );
  }
}
