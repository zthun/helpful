# Other Property

[Back to Helpful Validation](../../README.md)

Validate a property against another property on the same object.

## Exports

| Export                           | Description                                                                                                                                                                                        |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `EqualsOtherProperty<T>`         | `EqualsOtherProperty(property, options?)` registers a decorator requiring strict equality with another property. The property parameter is typed as a key of `T`.                                  |
| `EqualsOtherPropertyValidator`   | Constraint class whose `validate(value, args)` compares the value with the path from `args.constraints[0]`, resolved using lodash `get`. String comparisons are case-sensitive.                    |
| `RequiresOtherProperty<T>`       | `RequiresOtherProperty(property, options?)` registers a decorator requiring the referenced property to be defined.                                                                                 |
| `RequiresOtherPropertyValidator` | Constraint class whose `validate(_, args)` ignores the decorated value and checks that the referenced property is not undefined. Null, false, zero, and empty strings pass this definedness check. |

Enable TypeScript's `experimentalDecorators` for decorator syntax. Both
constraints resolve the referenced property with lodash `get`, supporting paths
at runtime. `RequiresOtherProperty` does not depend on whether the decorated
property is present; class-validator options control when validation is skipped.

## Usage

```ts
import { validate } from "class-validator";
import {
  EqualsOtherProperty,
  RequiresOtherProperty,
} from "@zthun/helpful-validation";

class Account {
  password = "secret";

  @EqualsOtherProperty<Account>("password")
  confirmation = "secret";

  @RequiresOtherProperty<Account>("password")
  hint = "Example";
}

const errors = await validate(new Account()); // []
```
