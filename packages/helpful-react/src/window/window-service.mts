import { $global } from "@zthun/helpful-fn";
import { createContext, use } from "react";

/**
 * Represents the window context.
 */
export const ZWindowServiceContext = createContext<typeof globalThis>($global);

/**
 * Gets the current window object.
 *
 * @returns The current window object.
 */
export function useWindowService() {
  return use(ZWindowServiceContext);
}
