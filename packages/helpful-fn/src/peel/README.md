# Peel

[Back to Helpful Functions](../../README.md)

Split matching prefixes or balanced delimiters from the start of text.

## Exports

| Export        | Description                                                                                                                                                                                                                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `peel`        | `peel(text, candidates)` returns `[matchedPrefix, remainder]` for the first candidate matching the start of the text. Candidate order determines priority. If none match, returns `[null, text]`.                                                                                                                                  |
| `peelBetween` | `peelBetween(text, open, close)` extracts text inside a balanced opening and closing pair at the start of the string, handling nested pairs and preserving remaining whitespace. Returns `[null, text]` when the opening prefix or a balanced closing delimiter is missing. Use distinct, nonempty opening and closing delimiters. |

## Usage

```ts
import { peel, peelBetween } from "@zthun/helpful-fn";

peel("https://example.com", ["https://", "http://"]);
// ["https://", "example.com"]
peelBetween("[a,[b]] rest", "[", "]");
// ["a,[b]", " rest"]
```
