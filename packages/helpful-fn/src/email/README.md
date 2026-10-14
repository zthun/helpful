# Email

[Back to Helpful Functions](../../README.md)

Build email contacts, address lists, envelopes, and messages as data objects.

## Exports

| Export                        | Description                                                                                                                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IZEmailContact`              | Contact interface with an `address` and optional `type` and `display` fields.                                                                                                    |
| `ZEmailContactBuilder`        | Sets `address`, `type`, and `display`. Supports partial `assign`, full `copy`, and `build`.                                                                                      |
| `ZEmailContactAddressBuilder` | Collects strings or contacts with `address` or `addresses`, sets a `delimiter`, and builds a string of nonempty addresses. The default delimiter is a comma followed by a space. |
| `IZEmailEnvelope`             | Envelope interface with a required `from` contact or string and optional arrays of `to`, `cc`, and `bcc` recipients.                                                             |
| `ZEmailEnvelopeBuilder`       | Sets `from`; adds recipients with `to`, `cc`, and `bcc`; replaces recipient lists with `tos`, `ccs`, and `bccs`. Supports `assign`, `copy`, and `build`.                         |
| `IZEmail`                     | Message interface with a required `envelope` and optional `subject` and `message` strings.                                                                                       |
| `ZEmailBuilder`               | Sets `envelope`, `subject`, and `message`. Supports `assign`, `copy`, and `build`.                                                                                               |

The contact, envelope, and message builders use JSON copying for `copy`,
`assign`, and `build`, so their results follow JSON serialization rules. These
builders construct email data; delivery is handled by the caller.

## Usage

```ts
import {
  ZEmailBuilder,
  ZEmailContactBuilder,
  ZEmailEnvelopeBuilder,
} from "@zthun/helpful-fn";

const recipient = new ZEmailContactBuilder()
  .address("ada@example.com")
  .display("Ada")
  .build();
const envelope = new ZEmailEnvelopeBuilder()
  .from("team@example.com")
  .to(recipient)
  .build();
const email = new ZEmailBuilder()
  .envelope(envelope)
  .subject("Welcome")
  .message("Hello Ada!")
  .build();
```
