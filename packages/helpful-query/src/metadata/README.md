# Metadata

[Back to Helpful Query](../../README.md)

Describe fields for consumers that display, edit, or sort data.

## Exports

| Export                  | Description                                                                                                                                                                                                                                                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ZMetadataType`         | Enum of field types: `Date`, `Number`, `Text`, `File`, `Boolean`, `Icon`, `Image`, and `Custom`.                                                                                                                                                                                                                                   |
| `IZMetadata`            | Field description with required `id`, `name`, and `type`, plus optional `path`, `description`, `fallback`, `format`, `sortable`, `editable`, `cls`, `precision`, `width`, and `height`.                                                                                                                                            |
| `ZMetadataBuilder`      | Starts with a generated ID, the same name, and text type. Provides setters for each metadata field, `square` for both dimensions, and type shortcuts: `text`, `file`, `custom`, `date`, `number`, `icon`, `image`, and `boolean`. `sortable` and `editable` default to true when called. `copy` and `build` use structured clones. |
| `ZWellKnownIconClasses` | Enum of icon-family identifiers: `FontAwesome`, `FontAwesomeBrands`, `FontAwesomeSharp`, and `Material`. Values are identifying URLs; consumers decide how to render them.                                                                                                                                                         |

Metadata describes presentation and capabilities; applying formats, rendering
icons, and implementing editing are responsibilities of the consuming component.

## Usage

```ts
import { ZMetadataBuilder } from "@zthun/helpful-query";

const age = new ZMetadataBuilder()
  .id("age")
  .name("Age")
  .path("age")
  .number()
  .precision(0)
  .sortable()
  .editable()
  .build();
```
