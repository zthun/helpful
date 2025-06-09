import { countBuckets } from "@zthun/helpful-fn";
import type { IZDataRequest, IZDataSource } from "@zthun/helpful-query";
import { useMemo } from "react";
import { asStateData, useAsyncState } from "../async-state/use-async-state.mjs";

/**
 * Returns a page view that calculates the necessary information for doing pagination.
 *
 * This specific state is for viewing one page at a time.  The actual count and view
 * are independent of one another.
 *
 * @param dataSource -
 *        The data source to retrieve the page information.
 * @param request -
 *        The current request that represents the page of data.
 * @param T -
 *        The type of data the source will return.
 *
 * @returns
 *        The view, count, size, page number, and page count.
 *        If the size in the request is not specified, then Infinity is returned for it.
 *        If the page in the request is not specified, then 1 is returned for it.
 */
export function usePageViewState<T = any>(
  dataSource: IZDataSource<T>,
  request: IZDataRequest,
) {
  const [view] = useAsyncState(
    () => dataSource.retrieve(request),
    [request, dataSource],
  );
  const [count] = useAsyncState(
    () => dataSource.count(request),
    [request.filter, request.search, dataSource],
  );

  const size = request.size || Infinity;
  const page = request.page || 1;

  const _count = asStateData(count, 0);
  const pages = useMemo(
    () => countBuckets(size, _count, 1),
    [request.size, count],
  );

  return { view, count, pages, size, page };
}
