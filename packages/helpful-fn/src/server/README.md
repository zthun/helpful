# Server

[Back to Helpful Functions](../../README.md)

Describe a server connection and build its configuration.

## Exports

| Export           | Description                                                                                                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IZServer`       | Interface with a required `address` and optional `port`, `username`, and `password`. The address is a string and does not distinguish protocol from hostname.                           |
| `ZServerBuilder` | Fluent `address`, `port`, `username`, and `password` setters. `assign` merges partial properties, `copy` replaces the configuration using a JSON copy, and `build` returns a JSON copy. |

## Usage

```ts
import { ZServerBuilder } from "@zthun/helpful-fn";

const server = new ZServerBuilder()
  .address("localhost")
  .port(8080)
  .username("guest")
  .build();
```
