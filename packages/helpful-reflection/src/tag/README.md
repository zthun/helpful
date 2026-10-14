# Tag

[Back to Helpful Reflection](../../README.md)

Attach named tags to classes or members and query them at runtime.

## Exports

| Export     | Description                                                                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ZTag`     | `ZTag(name)` returns a legacy class, method, and property decorator. Stores tag metadata on the decorated target or target/member pair using reflect-metadata's no-conflict API.           |
| `isTagged` | `isTagged(name, target, property?)` checks for a named tag. Returns false for nullish targets and primitives. Reads inherited metadata as well as metadata defined directly on the target. |

Enable `experimentalDecorators` in TypeScript for decorator syntax. Class tags
are stored on the constructor. Instance method and property tags are stored on
the prototype, while static member tags are stored on the constructor. Pass the
matching target and member name to `isTagged`.

## Usage

```ts
import { ZTag, isTagged } from "@zthun/helpful-reflection";

@ZTag("entity")
class User {
  @ZTag("display")
  name = "Ada";
}

isTagged("entity", User); // true
isTagged("display", User.prototype, "name"); // true
```
