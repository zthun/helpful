# Data Uri

[Back to Helpful Validation](../../README.md)

Constrain the character length of the data section of a data URI.

## Exports

| Export                    | Description                                                                                                                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `IsDataURILimit`          | `IsDataURILimit(min, max, options?)` registers a class-validator property decorator with inclusive character-length bounds. Use infinity for an unbounded maximum.                                                       |
| `IsDataURILimitValidator` | Constraint class exposing `validate(value, args)`. Requires a string starting with `data:` and compares the segment immediately after the first comma against `args.constraints` containing minimum and maximum lengths. |

The limit measures encoded string characters rather than decoded file bytes.
This validator does not fully validate MIME types or encoding. A string starting
with `data:` but containing no comma can throw when the validator accesses the
missing data segment; provide structurally valid data URIs before applying the
length check. Enable TypeScript's `experimentalDecorators` for decorator syntax.

## Usage

```ts
import { validate } from "class-validator";
import { IsDataURILimit } from "@zthun/helpful-validation";

class Upload {
  @IsDataURILimit(1, 100)
  image = "data:image/png;base64,AAAA";
}

const errors = await validate(new Upload()); // []
```
