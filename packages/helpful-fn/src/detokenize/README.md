# Detokenize

[Back to Helpful Functions](../../README.md)

Replace interpolation tokens in text using a dictionary.

## Exports

| Export       | Description                                                                                                                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `detokenize` | `detokenize(tokenized, tokens)` replaces `${name}` tokens with dictionary values. Missing keys leave tokens intact; explicit null or undefined values remove the token. Null or undefined input text returns an empty string. |

## Usage

```ts
import { detokenize } from "@zthun/helpful-fn";

detokenize("Hello ${name}! ${missing}", { name: "Ada" });
// "Hello Ada! ${missing}"
```
