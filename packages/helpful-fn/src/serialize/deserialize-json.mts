import type { IZDeserialize } from "./deserialize.mjs";

/**
 * A deserializer that deserializes a JSON string.
 */
export class ZDeserializeJson<T> implements IZDeserialize<T> {
  public constructor(private _schema?: (k: any) => k is T) {}

  public deserialize(candidate: string): T {
    const parsed = JSON.parse(candidate);

    if (this._schema && !this._schema(parsed)) {
      throw new Error(
        "The parsed JSON does not conform to the given schema requirement",
      );
    }

    return parsed;
  }
}
