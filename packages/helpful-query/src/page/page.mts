/**
 * Represents a page of data.
 *
 * @param T -
 *        The type of data on the page.
 */
export interface IZPage<T> {
  /**
   * The total number of items across all pages.
   */
  count: number;
  /**
   * The current data view on the page.
   */
  data: T[];
}

/**
 * A builder for a page object.
 */
export class ZPageBuilder<T = unknown> {
  private _page: IZPage<T>;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._page = {
      count: 0,
      data: [],
    };
  }

  /**
   * Sets the count to 0 and the data to the empty array.
   *
   * @returns
   *        This object.
   */
  public empty() {
    return this.all([]);
  }

  /**
   * Creates a page of data that has only one item, and it represents the entire data set.
   *
   * @param item -
   *        The only item in the data set.
   *
   * @returns
   *        This object.
   */
  public singleton<D>(item: D) {
    return this.all([item]);
  }

  /**
   * Creates a page of data where the data represents the entire data set.
   *
   * @param data -
   *        The entire data set.
   *
   * @returns
   *        This object.
   */
  public all<D>(data: D[]) {
    return this.data(data).count(data.length);
  }

  /**
   * Sets the page view.
   *
   * @param data -
   *        The view of the data on the given page.
   *
   * @returns
   *        This object.
   */
  public data<D>(data: D[]): ZPageBuilder<D> {
    const current = this._page as unknown as IZPage<D>;
    const next = new ZPageBuilder<D>().copy(current);
    next._page.data = data.slice();
    return next;
  }

  /**
   * Sets the total item count across all pages.
   *
   * @param count -
   *        The total item count across all pages.
   *
   * @returns
   *        This object.
   */
  public count(count: number) {
    this._page.count = count;
    return this;
  }

  /**
   * Copies another page object into this page builder.
   *
   * @param other -
   *        The page to copy.
   *
   * @returns
   *        This object.
   */
  public copy(other: IZPage<T>) {
    this._page = { ...other };
    this._page.data = this._page.data.slice();
    return this;
  }

  /**
   * Returns the built page.
   *
   * @returns
   *        The built page.
   */
  public build(): IZPage<T> {
    const copy = { ...this._page };
    copy.data = copy.data.slice();
    return copy;
  }
}
