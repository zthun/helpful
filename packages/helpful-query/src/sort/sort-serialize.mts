import type { IZSort } from "./sort.mjs";

/**
 * An object that can serialize an {@link IZSort} list to a string.
 */
export class ZSortSerialize {
  /**
   * Serializes a sort list to a string.
   *
   * @param candidate -
   *        The sort list to serialize.
   *
   * @returns
   *        The string representation of the sort.  Returns undefined
   *        if the list is empty, null, or undefined.
   */
  public serialize(candidate: IZSort[] | null | undefined): string | undefined {
    if (!candidate?.length) {
      return undefined;
    }

    const params = candidate
      .map((s) => `${s.direction}(${s.subject})`)
      .join(", ");
    return candidate.length > 1 ? `(${params})` : params;
  }
}
