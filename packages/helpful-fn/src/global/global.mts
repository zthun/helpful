/* v8 ignore start -- @preserve */
/* istanbul ignore file -- @preserve */
/**
 * Resolves the global object without referencing DOM globals so this can be
 * consumed in Node builds that do not include the `dom` lib.
 */
export const $global = globalThis;
/* v8 ignore end -- @preserve */
