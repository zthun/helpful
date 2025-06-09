import { tryFallback } from "@zthun/helpful-fn";
import { ZFilterDeserialize } from "../filter/filter-deserialize.mjs";
import type { IZFilter } from "../filter/filter.mjs";
import { ZSortDeserialize } from "../sort/sort-deserialize.mjs";
import type { IZSort } from "../sort/sort.mjs";

/**
 * Describes a request as if it was placed an a url in the query params.
 */
export interface IZDataRequestQuery {
  /**
   * Page number.
   */
  page?: string;
  /**
   * Page size.
   */
  size?: string;
  /**
   * Search criterion.
   */
  search?: string;
  /**
   * Filter criterion.
   */
  filter?: string;
  /**
   * Sort criterion.
   */
  sort?: string;
}

/**
 * Describes a request for a given set of data.
 */
export interface IZDataRequest {
  /**
   * The page number.
   *
   * This is one based.  Should always default
   * to 1.
   */
  page?: number;
  /**
   * The page size.
   *
   * If not set, it will be up to the consumer
   * to decide the default.
   */
  size?: number;

  /**
   * Search query.
   *
   * How the search is performed is done
   * through the consumer.
   *
   * @see
   *        {@link ZDataSearchFields} for a basic
   *        implementation.
   */
  search?: string;

  /**
   * The filter query.
   *
   * How the filter is applied is done through
   * the consumer.
   *
   * @see
   *        {@link ZDataFilterFields} for a basic
   *        implementation.
   */
  filter?: IZFilter;

  /**
   * The sort order.
   *
   * How the sort is applied is done through
   * the consumer.
   *
   * @see
   *        {@link ZSorterSingle} for a basic
   *        implementation.
   */
  sort?: IZSort[];
}

/**
 * Represents a builder for a data request.
 */
export class ZDataRequestBuilder {
  private _request: IZDataRequest;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._request = {};
  }

  /**
   * Sets the page to retrieve.
   *
   * @param page -
   *        The page number
   *
   * @returns
   *        A reference to this object.
   */
  public page(page?: number): this {
    if (page != null) {
      this._request.page = Math.max(page, 1);
    } else {
      delete this._request.page;
    }
    return this;
  }

  /**
   * Sets the page size.
   *
   * @param size -
   *        The page size.
   *
   * @returns
   *        A reference to this object.
   */
  public size(size?: number): this {
    if (size != null) {
      this._request.size = Math.max(size, 0);
    } else {
      delete this._request.size;
    }
    return this;
  }

  /**
   * Sets the search criteria.
   *
   * @param search -
   *        The search query.
   *
   * @returns
   *        A reference to this object.
   */
  public search(search?: string): this {
    this._request.search = search;
    return this;
  }

  /**
   * Sets the filter criteria.
   *
   * @param filter -
   *        The filter criteria.  If this is a string,
   *        then it will be parsed according to the filter
   *        criteria.
   *
   * @returns
   *        A reference to this object.
   */
  public filter(filter?: IZFilter | string): this {
    if (filter == null) {
      delete this._request.filter;
    } else {
      const f =
        typeof filter === "object"
          ? filter
          : tryFallback(() => new ZFilterDeserialize().deserialize(filter));
      this._request.filter = f;
    }
    return this;
  }

  /**
   * Sets the sort criteria.
   *
   * @param sort -
   *        The list of sorts to make on the request.
   *
   * @returns
   *        A reference to this object.
   */
  public sort(sort?: IZSort[] | string): this {
    if (sort == null) {
      delete this._request.sort;
    } else {
      const s =
        typeof sort === "string"
          ? tryFallback(() => new ZSortDeserialize().deserialize(sort))
          : sort;
      this._request.sort = s;
    }
    return this;
  }

  /**
   * Copies an existing data request into this object.
   *
   * @param other -
   *        The data request object to copy.
   *
   * @returns
   *        A reference to this object.
   */
  public copy(other: IZDataRequest) {
    this._request = JSON.parse(JSON.stringify(other));
    return this;
  }

  /**
   * Constructs the data from a request query.
   *
   * This is useful for putting request parameters on a url.
   *
   * @param query -
   *        The query that was requested.
   *
   * @returns
   *        This object.
   */
  public query(query: IZDataRequestQuery) {
    if (query.filter != null) {
      this.filter(query.filter);
    }

    if (query.sort != null) {
      this.sort(query.sort);
    }

    if (query.page != null) {
      const page = +query.page;
      this.page(isNaN(page) ? this._request.page : page);
    }

    if (query.size != null) {
      const size = +query.size;
      this.size(isNaN(size) ? this._request.size : size);
    }

    if (query.search != null) {
      this.search(query.search);
    }

    return this;
  }

  /**
   * Returns the currently built request.
   *
   * The returned request will be a deep copy.
   *
   * @returns
   *        The currently built request.
   */
  public build(): IZDataRequest {
    return JSON.parse(JSON.stringify(this._request));
  }
}
