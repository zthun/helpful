/**
 * This is just a method that allows you to tag an interpolation
 * string as a syntax language.
 *
 * This is useful with IDE extensions that can detect the language
 * and do the syntax highlighting for you.
 *
 * @param strings -
 *        The string breaks for interpolation.
 * @param expressions -
 *        The equivalent expressions that break apart
 *        the single string literal.
 *
 * @returns
 *        The compiled string literal.  This is no different
 *        than letting native JavaScript do it for you.
 *
 * @example
 *
 * ```ts
 * const html = tag;
 * const css = tag;
 *
 * const $html = html`
 *  <div>Some IDE extensions will highlight this as html</div>
 * `
 *
 * const $css = css`
 *   button {
 *     display: grid;
 *   }
 * `
 * ```
 */
export function tag(
  strings: TemplateStringsArray,
  ...expressions: unknown[]
): string {
  let [result] = strings;

  for (let i = 1, l = strings.length; i < l; i++) {
    result += String(expressions[i - 1]);
    result += strings[i];
  }

  return result;
}

/**
 * An alias for {@link tag}.
 *
 * Some {@link https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html | IDE extensions will detect the string}
 * interpolation as html when using this tag.
 */
export const html = tag;

/**
 * An alias for {@link tag}.
 *
 * Some {@link https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css | IDE extensions will detect the string}
 * interpolation as css when using this tag.
 */
export const css = tag;

/**
 * An alias for {@link tag}.
 *
 * Some {@link https://marketplace.visualstudio.com/items?itemName=zjcompt.es6-string-javascript | IDE extensions will detect the string}
 * interpolation as javascript when using this tag.
 */
export const js = tag;

/**
 * See {@link js}
 */
export const javascript = tag;

/**
 * An alias for {@link tag}.
 *
 * Some {@link https://marketplace.visualstudio.com/items?itemName=jeoht.es6-string-markdown | IDE extensions will detect the string}
 * interpolation as markdown when using this tag.
 */
export const md = tag;

/**
 * See {@link md}
 */
export const markdown = tag;

/**
 * An alias for {@link tag}.
 *
 * Some {@link https://marketplace.visualstudio.com/items?itemName=HoodieCollin.es6-string-typescript | IDE extensions will detect the string}
 * interpolation as typescript when using this tag.
 */
export const ts = tag;

/**
 * See {@link ts}
 */
export const typescript = tag;

/**
 * An alias for {@link tag}.
 */
export const sh = tag;

/**
 * An alias for {@link tag}.
 */
export const bash = tag;

/**
 * An alias for {@link tag}.
 */
export const zsh = tag;
