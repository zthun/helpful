# Tag

[Back to Helpful Functions](../../README.md)

Tag template literals with language names for editor syntax highlighting.

## Exports

| Export              | Description                                                                                          |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| `tag`               | Template tag that combines literal segments and expressions into a string using `String` conversion. |
| `html`, `css`       | Aliases of `tag` for HTML and CSS template literals.                                                 |
| `js`, `javascript`  | Aliases of `tag` for JavaScript template literals.                                                   |
| `md`, `markdown`    | Aliases of `tag` for Markdown template literals.                                                     |
| `ts`, `typescript`  | Aliases of `tag` for TypeScript template literals.                                                   |
| `sh`, `bash`, `zsh` | Aliases of `tag` for shell template literals.                                                        |

Language aliases behave identically at runtime. Editor highlighting depends on
the installed editor extensions. Expressions are interpolated directly; the HTML
tag does not escape or sanitize values.

## Usage

```ts
import { css, html } from "@zthun/helpful-fn";

const name = "Ada";
const markup = html`<p>Hello ${name}</p>`; // "<p>Hello Ada</p>"
const styles = css`
  p {
    color: blue;
  }
`;
```
