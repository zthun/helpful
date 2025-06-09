import type { IZDataMatch } from "../match/data-match.mjs";

/**
 * Represents a data match for text strings.
 *
 * The data should match when it's text
 * representation matches the filter string.
 */
export class ZDataSearchText implements IZDataMatch<any, string> {
  public match(data: any, filter: string): boolean {
    const _filter = filter.toUpperCase();
    return `${data}`.toUpperCase().indexOf(_filter) >= 0;
  }
}
