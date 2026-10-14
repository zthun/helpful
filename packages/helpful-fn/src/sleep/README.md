# Sleep

[Back to Helpful Functions](../../README.md)

Wait asynchronously using a timer.

## Exports

| Export  | Description                                                                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sleep` | `sleep(ms = 0)` returns a promise resolving to undefined after the timer fires. `sleep(ms, value)` resolves with the supplied value instead. Uses `setTimeout` and does not block the thread. |

## Usage

```ts
import { sleep } from "@zthun/helpful-fn";

await sleep(10);
const result = await sleep(10, "ready"); // "ready"
```
