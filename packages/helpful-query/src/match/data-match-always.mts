import type { IZDataMatch } from "./data-match.mjs";

/**
 * An implementation of an IZDataMatch that always returns true on match.
 */
export class ZDataMatchAlways implements IZDataMatch<any, any> {
  /**
   * Returns true.
   *
   * @returns
   *        true
   */
  public match() {
    return true;
  }
}
