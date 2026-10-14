# File Select

[Back to Helpful React](../../README.md)

Open a browser file picker through a service and React context.

## Exports

| Export               | Description                                                                                                                                                                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IZFileSelect`       | Interface exposing `open(accept, callback)` with a callback receiving a selected `File`.                                                                                                                                                                 |
| `ZFileSelect`        | Creates and reuses a hidden file input. Constructor accepts a document and container, defaulting to the global document and its body. `open` sets the accept filter and opens the picker; a change event passes the first selected file to the callback. |
| `ZFileSelectContext` | React context with a default `ZFileSelect` instance. Provide another implementation to customize file selection.                                                                                                                                         |
| `useFileSelect`      | Reads the current `IZFileSelect` from context.                                                                                                                                                                                                           |

Call `open` from a browser interaction such as a click. This service requires a
DOM document and container. It uses a callback rather than a promise; canceling
selection does not invoke the callback.

## Usage

```ts
import { createElement } from "react";
import { useFileSelect } from "@zthun/helpful-react";

export function ChooseImage({ onFile }: { onFile: (file: File) => void }) {
  const picker = useFileSelect();
  return createElement(
    "button",
    {
      onClick: () => picker.open("image/*", onFile),
    },
    "Choose image",
  );
}
```
