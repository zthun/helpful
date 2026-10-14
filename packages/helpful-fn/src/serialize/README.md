# Serialize

[Back to Helpful Functions](../../README.md)

Serialize values, parse JSON, and compose deserializers.

## Exports

| Export                  | Description                                                                                                                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IZSerialize<T, S>`     | Interface exposing `serialize(candidate)` with an output of `S \| undefined`. The output type defaults to string.                                                                                             |
| `IZDeserialize<T, S>`   | Interface exposing `deserialize(candidate)` returning `T` or throwing when parsing fails. The input type defaults to string.                                                                                  |
| `ZSerializeJson`        | Serializes with `JSON.stringify(candidate, undefined, 2)`, producing JSON with two-space indentation. Can return undefined for unsupported top-level values and throws for values that JSON cannot serialize. |
| `ZDeserializeJson<T>`   | Parses JSON and optionally checks the result with a type-guard function supplied to the constructor. Invalid JSON and failed schema checks throw errors; the generic type alone does not validate the result. |
| `ZDeserializeTry<T, S>` | Tries child deserializers in order and returns the first successful result. If all fail, throws an error containing the candidate and collected child error messages.                                         |

## Usage

```ts
import {
  ZDeserializeJson,
  ZDeserializeTry,
  ZSerializeJson,
} from "@zthun/helpful-fn";

const serializer = new ZSerializeJson();
const json = serializer.serialize({ name: "Ada" });
const parser = new ZDeserializeJson<{ name: string }>();
parser.deserialize(json!); // { name: "Ada" }
const combined = new ZDeserializeTry([parser]);
combined.deserialize('{"name":"Grace"}'); // { name: "Grace" }
```
