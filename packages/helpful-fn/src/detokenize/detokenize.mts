import type { ZOptional } from "../optional/optional.mjs";

/**
 * Does replacement of interpolation, ${}, tokens in a string.
 *
 * @param tokenized -
 *        The string that can contain interpolation tokens.
 * @param tokens -
 *         The tokens to replace.
 *
 * @returns
 *         A detokenized string that replaces the tokens with the values
 *         in the token dictionary.  If a value is missing in the token dictionary,
 *         then the tokens are preserved.  If the value of a token is null or
 *         undefined explicitly, then any tokens in the tokenized string are
 *         removed for that value.
 */
export function detokenize(
  tokenized: ZOptional<string>,
  tokens: Record<string, ZOptional<string>>,
) {
  if (tokenized == null) return "";

  return tokenized.replace(/\$\{([^}]+)\}/g, (_, tokenName) => {
    if (tokenName in tokens) {
      const value = tokens[tokenName];
      if (value === null || value === undefined) {
        return "";
      }
      return value;
    }
    return `\${${tokenName}}`; // leave token intact if not present in tokens
  });
}
