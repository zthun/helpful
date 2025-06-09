import type { IZDeserialize } from "./deserialize.mjs";

/**
 * A deserializer that attempts to deserialize multiple times through a series of supported languages.
 *
 * @param T -
 *        The type of data to deserialize.
 * @param S -
 *        The input type
 */
export class ZDeserializeTry<T, S = string> implements IZDeserialize<T, S> {
  /**
   * Initializes a new instance of this object.
   *
   * @param _children -
   *        The list of deserializer objects to try on a specific candidate.
   *        The first deserializer to succeed will return the target object.
   *        If no deserializer is able to deserialize the candidate, then an
   *        error is throw with a mapping of serialization errors between each
   *        deserializer.
   */
  public constructor(private _children: IZDeserialize<T, S>[]) {}

  public deserialize(candidate: S): T {
    const errors: string[] = [];

    for (const child of this._children) {
      try {
        return child.deserialize(candidate);
      } catch (e) {
        errors.push(e.message);
      }
    }

    const msg = `Unable to deserialize candidate, ${candidate}.`;
    errors.splice(0, 0, msg);
    throw new Error(errors.join("\n\n"));
  }
}
