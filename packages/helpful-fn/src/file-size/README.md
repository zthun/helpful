# File Size

[Back to Helpful Functions](../../README.md)

Convert binary file-size units into bytes. Each conversion rounds up to a whole
byte.

## Exports

| Export             | Description                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| `kibibytes`, `kib` | Convert an amount of kibibytes to bytes using 1024 bytes per unit. `kib` is an alias.                     |
| `mebibytes`, `mib` | Convert an amount of mebibytes to bytes using 1024 squared bytes per unit. `mib` is an alias.             |
| `gibibytes`, `gib` | Convert an amount of gibibytes to bytes using 1024 cubed bytes per unit. `gib` is an alias.               |
| `tebibytes`, `tib` | Convert an amount of tebibytes to bytes using 1024 to the fourth power bytes per unit. `tib` is an alias. |
| `pebibytes`, `pib` | Convert an amount of pebibytes to bytes using 1024 to the fifth power bytes per unit. `pib` is an alias.  |

## Usage

```ts
import { kib, mebibytes } from "@zthun/helpful-fn";

kib(2); // 2048
mebibytes(1); // 1048576
```
