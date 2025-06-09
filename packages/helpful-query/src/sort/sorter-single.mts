import type { IZSort } from "./sort.mjs";
import { ZSortBuilder, ZSortDirection } from "./sort.mjs";
import type { IZSorter } from "./sorter.mjs";

/**
 * Represents a sorter that simulates a single sort at a time.
 */
export class ZSorterSingle implements IZSorter {
  private _sorted: IZSort | undefined;

  /**
   * Initializes a new instance of this object.
   *
   * @param initial -
   *        The initial sort list.
   */
  public constructor(initial: IZSort[] = []) {
    [this._sorted] = initial;
  }

  public index(subject?: string): number {
    return this._sorted?.subject === subject ? 1 : -1;
  }

  public sorted(subject?: string): ZSortDirection | undefined {
    return this._sorted && this._sorted?.subject === subject
      ? this._sorted.direction
      : undefined;
  }

  public sort(subject?: string): IZSort[] {
    this._sorted = this._sorted?.subject === subject ? this._sorted : undefined;

    if (!this._sorted) {
      [this._sorted] = new ZSortBuilder().ascending(subject).build();
    } else if (this._sorted.direction === ZSortDirection.Descending) {
      this._sorted = undefined;
    } else {
      [this._sorted] = new ZSortBuilder().descending(subject).build();
    }

    return this._sorted ? [this._sorted] : [];
  }
}
