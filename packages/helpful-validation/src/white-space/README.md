# White Space

[Back to Helpful Validation](../../README.md)

Reject strings that are empty or contain only whitespace.

## Exports

| Export                     | Description                                                                                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IsNotWhiteSpace`          | `IsNotWhiteSpace(options?)` registers a class-validator property decorator.                                                                                                   |
| `IsNotWhiteSpaceValidator` | Constraint class whose `validate(value)` requires a string with nonempty content after lodash `trim`. It checks the value without modifying it and rejects non-string values. |

Enable TypeScript's `experimentalDecorators` for decorator syntax. Validation
options are forwarded to class-validator; a failed check does not trim the
value.

## Usage

```ts
import { validate } from "class-validator";
import { IsNotWhiteSpace } from "@zthun/helpful-validation";

class Profile {
  @IsNotWhiteSpace()
  name = "  Ada  ";
}

const errors = await validate(new Profile()); // []
```
