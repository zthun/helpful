import { createError } from "@zthun/helpful-fn";
import type { IZDataRequest, IZDataSource } from "@zthun/helpful-query";
import { ZDataRequestBuilder } from "@zthun/helpful-query";
import { useEffect, useRef, useState } from "react";
import type { Subscription } from "rxjs";
import { defer } from "rxjs";
import type { ZAsyncDataState } from "../async-state/use-async-state.mjs";
import { ZAsyncLoading } from "../async-state/use-async-state.mjs";

/**
 * A type of view that loads the next set of data in batches.
 *
 * This kind of state is useful for views that don't need the total
 * count and instead load more data when requested.  You can use this
 * to implement infinite scrolling.
 *
 * @param source -
 *        The data source to load from.
 * @param template -
 *        The template request.  The page size will be used as
 *        the batch size.  The page to load will be ignored and
 *        will instead be controlled by this hook.
 * @param T -
 *        The type of data that the source will return.
 *
 * @returns
 *        The current view, last result, page number, and batch size.
 *        Also returns the method to load the next batch.
 */
export function useMoreViewState<T = any>(
  source: IZDataSource<T>,
  template: IZDataRequest,
) {
  const [view, setView] = useState<T[]>([]);
  const [last, setLast] = useState<ZAsyncDataState<T[]>>(ZAsyncLoading);
  const [complete, setComplete] = useState(false);
  const nextRequest = useRef(
    new ZDataRequestBuilder().copy(template).page(1).build(),
  );
  const _count = useRef<Promise<number> | null>(null);
  const subscription = useRef<Subscription | undefined>(undefined);

  const _loadMore = (complete: boolean) => {
    subscription.current?.unsubscribe();
    subscription.current = undefined;

    if (complete) {
      return;
    }

    subscription.current = defer(() => {
      _count.current = _count.current || source.count(nextRequest.current);
      setLast(ZAsyncLoading);
      return Promise.all([
        _count.current,
        source.retrieve(nextRequest.current),
      ]);
    }).subscribe({
      next: ([count, page]) => {
        nextRequest.current = new ZDataRequestBuilder()
          .copy(nextRequest.current)
          .page(nextRequest.current.page! + 1)
          .build();

        setComplete(page.length + view.length >= count);
        setView((v) => v.concat(page));
        setLast(page);
      },
      error: (e) => {
        _count.current = null;
        setComplete(false);
        setLast(createError(e));
      },
    });
  };

  const reset = () => {
    nextRequest.current = new ZDataRequestBuilder()
      .copy(template)
      .page(1)
      .build();
    _count.current = null;
    setView([]);
    setComplete(false);
    _loadMore(false);
  };

  useEffect(() => {
    reset();
    return () => subscription.current?.unsubscribe();
  }, [source, template.filter, template.size, template.sort, template.search]);

  return {
    view,
    last,
    complete,
    page: nextRequest.current.page!,
    size: nextRequest.current.size || Infinity,
    more: () => _loadMore(complete),
    reset,
  };
}
