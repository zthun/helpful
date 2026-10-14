# Keyboard Activate

[Back to Helpful React](../../README.md)

Create keyboard activation handlers for focusable elements.

## Exports

| Export                      | Description                                                                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IZKeyboardInteraction<T>`  | Interface with optional `tabIndex` and `onKey` callback. Attach `onKey` to `onKeyDown` or `onKeyUp`.                                                    |
| `DefaultActivateCodes`      | Default event codes: `Enter` and `Space`.                                                                                                               |
| `createKeyboardActivate<T>` | `createKeyboardActivate(handler?, codes?)` returns a handler that forwards only matching `event.code` values, or undefined when no handler is supplied. |
| `useKeyboardActivate<T>`    | Memoizes the keyboard handler and returns `{ onKey, tabIndex }`. The tab index is zero when a handler exists and undefined otherwise.                   |

Matching uses `event.code`, not `event.key`. The handler does not prevent
default browser actions or stop propagation; add that behavior to your callback
if needed.

## Usage

```ts
import { createElement } from "react";
import { useKeyboardActivate } from "@zthun/helpful-react";

export function Action({ activate }: { activate: () => void }) {
  const { onKey, tabIndex } = useKeyboardActivate<HTMLDivElement>(() =>
    activate(),
  );
  return createElement(
    "div",
    {
      role: "button",
      tabIndex,
      onKeyDown: onKey,
      onClick: activate,
    },
    "Activate",
  );
}
```
