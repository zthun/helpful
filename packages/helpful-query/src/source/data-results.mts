import { chunk, get } from "lodash-es";
import { ZDataMatchOptional } from "../match/data-match-optional.mjs";
import type { IZDataMatch } from "../match/data-match.mjs";
import type { IZSort } from "../sort/sort.mjs";
import { ZSortDirection } from "../sort/sort.mjs";

/**
 * Takes a list of data and paginates it in memory.
 *
 * @param data -
 *        The data to paginate.
 * @param page -
 *        The page number to retrieve.
 * @param size -
 *        The size of a single page
 *
 * @returns
 *        The subset page of data that was offset and limited to.  If
 *        page goes beyond the last page, then the result set should be empty.
 *        If the page is less than 1, then the first page will be used.
 *        If size is 0, then an empty page will be returned.
 */
export function paginate<T>(data: T[], page: number, size: number) {
  if (size === Infinity) {
    return page <= 1 ? data : [];
  }

  const _page = Math.max(0, page - 1);

  const pages = chunk(data, size);
  return pages[_page] || [];
}

/**
 * Matches data given a data set to a given filter.
 *
 * @param data -
 *        The data to filter.
 * @param filter -
 *        The filter to apply to the data.  If this
 *        is null or undefined, then the entire
 *        data set will match.
 * @param match -
 *        The match implementation that determine if
 *        a single item in data matches the provided
 *        filter.
 *
 * @returns
 *        A subset of data that matches to the given filter.
 */
export function filter<T, F>(
  data: T[],
  filter: F | undefined | null,
  match: IZDataMatch<T, F>,
) {
  const _match = new ZDataMatchOptional<T, F>(match);
  return data.filter((data) => _match.match(data, filter));
}

/**
 * Sorts the data.
 *
 * @param data -
 *        The data to sort.
 * @param sort -
 *        The sort criteria.
 *
 * @returns
 *        The data sorted to the sort criteria.
 */
export function sort<T>(data: T[], sorts: IZSort[] | undefined): T[] {
  const _data = data.slice();

  if (!sorts?.length) {
    return _data;
  }

  _data.sort((x: T | null, y: T | null) => {
    for (let i = 0; i < sorts.length; ++i) {
      const s = sorts[i];
      const m = s.direction === ZSortDirection.Ascending ? 1 : -1;
      const xV: any = s.subject ? get(x, s.subject, null) : x;
      const yV: any = s.subject ? get(y, s.subject, null) : y;

      if (xV == null && yV == null) {
        continue;
      }

      if (xV == null && yV != null) {
        return -1 * m;
      }

      if (xV != null && yV == null) {
        return m;
      }

      if (xV === yV) {
        continue;
      }

      return m * (xV < yV ? -1 : 1);
    }

    return 0;
  });

  return _data;
}
