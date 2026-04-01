import { ZDataFilterFields } from "../filter/data-filter-fields.mjs";
import type { IZFilter } from "../filter/filter.mjs";
import type { IZDataMatch } from "../match/data-match.mjs";
import { ZDataMatchAlways } from "../match/data-match-always.mjs";

/**
 * Options for an {@link ZDataSourceStatic} object.
 */
export interface IZDataSourceStaticOptions<T> {
  /**
   * How the search field in the request is handled.
   */
  search: IZDataMatch<T, string>;
  /**
   * How the filter field in the request is handled.
   */
  filter: IZDataMatch<T, IZFilter>;
  /**
   * The total number of milliseconds to debounce each
   * request before resolving the results.
   */
  delay: number;
}

/**
 * A builder for a {@link IZDataSourceStaticOptions} object.
 */
export class ZDataSourceStaticOptionsBuilder<T> {
  private _options: IZDataSourceStaticOptions<T>;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._options = {
      search: new ZDataMatchAlways(),
      filter: new ZDataFilterFields(),
      delay: 0,
    };
  }

  /**
   * Sets the search implementation.
   *
   * @param val -
   *        The value to set.
   *
   * @see
   *        {@link IZDataSourceStaticOptions.search}
   *
   * @returns
   *        A reference to this object.
   */
  public search(val: IZDataMatch<T, string> | undefined): this {
    this._options.search = val || new ZDataMatchAlways();
    return this;
  }

  /**
   * Sets the search implementation.
   *
   * @param val -
   *        The value to set.
   *
   * @see
   *        {@link IZDataSourceStaticOptions.filter}
   *
   * @returns
   *        A reference to this object.
   */
  public filter(val: IZDataMatch<T, IZFilter> | undefined): this {
    this._options.filter = val || new ZDataFilterFields();
    return this;
  }

  /**
   * Sets the delay in milliseconds.
   *
   * @param val -
   *        The value to set.
   *
   * @see
   *        {@link IZDataSourceStaticOptions.delay}
   *
   * @returns
   *        A reference to this object.
   */
  public delay(val: number | undefined): this {
    this._options.delay = val || 0;
    return this;
  }

  /**
   * Builds the options and returns the object.
   *
   * @returns
   *        A shallow copy of the built options.
   */
  public build(): IZDataSourceStaticOptions<T> {
    return { ...this._options };
  }
}
