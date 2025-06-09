import type { IZSerialize } from "./serialize.mjs";

/**
 * Represents a serializer that serializes anything to a JSON string.
 */
export class ZSerializeJson implements IZSerialize<any> {
  public serialize(candidate: any): string | undefined {
    return JSON.stringify(candidate, undefined, 2);
  }
}
