# Helpful Functions

Provides a basic set of JavaScript functions and classes that are not a part of
the JavaScript engine or lodash.

Helpful Functions can be used in Node.js as well as browsers.

## Installation

```sh
# NPM
npm install @zthun/helpful-fn
# Yarn
yarn add @zthun/helpful-fn
```

## Features

Import the public exports shown in each feature guide from `@zthun/helpful-fn`.
Type-only exports can be imported with `import type`.

| Feature                                        | Description                                                                                         |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [anchor](./src/anchor/README.md)               | Define anchor points for alignment and positioning in two-dimensional space.                        |
| [assert](./src/assert/README.md)               | Collect failed claims and throw an error after checking them all.                                   |
| [cast](./src/cast/README.md)                   | Normalize values into enum values, file extensions, numbers, or supplier functions.                 |
| [cookie](./src/cookie/README.md)               | Describe cookies and construct cookie data with a fluent builder.                                   |
| [count-buckets](./src/count-buckets/README.md) | Calculate how many buckets or pages are needed for a number of items.                               |
| [create-error](./src/create-error/README.md)   | Convert error responses and other problem values into JavaScript errors.                            |
| [create-guid](./src/create-guid/README.md)     | Generate random UUID strings.                                                                       |
| [culture](./src/culture/README.md)             | Discover the current locale and the locale codes supported by the package's date helpers.           |
| [date](./src/date/README.md)                   | Parse, guess, and format date values with locale and timezone options.                              |
| [detokenize](./src/detokenize/README.md)       | Replace interpolation tokens in text using a dictionary.                                            |
| [email](./src/email/README.md)                 | Build email contacts, address lists, envelopes, and messages as data objects.                       |
| [empty](./src/empty/README.md)                 | Check for nullish values and objects with no enumerable own string keys.                            |
| [enum](./src/enum/README.md)                   | Check enum values and associate them with display metadata.                                         |
| [file-size](./src/file-size/README.md)         | Convert binary file-size units into bytes. Each conversion rounds up to a whole byte.               |
| [first-where](./src/first-where/README.md)     | Select the first matching value from an argument list, with a fallback.                             |
| [function](./src/function/README.md)           | Describe functions that supply values without taking arguments. These exports are TypeScript types. |
| [geometry](./src/geometry/README.md)           | Describe points, sides, and corners, and calculate rectangle dimensions and placement.              |
| [global](./src/global/README.md)               | Access the global object without referring to DOM-specific globals.                                 |
| [join-defined](./src/join-defined/README.md)   | Join values into strings while omitting nullish values and conditionally excluded items.            |
| [lazy](./src/lazy/README.md)                   | Initialize an asynchronous value on demand and reuse its promise.                                   |
| [mutable](./src/mutable/README.md)             | Remove readonly modifiers from TypeScript object types. These types do not modify runtime objects.  |
| [number](./src/number/README.md)               | Describe numeric values and values that may be converted to numbers.                                |
| [obligation](./src/obligation/README.md)       | Resolve values or promises while enforcing required values or applying optional fallbacks.          |
| [optional](./src/optional/README.md)           | Express nullability in TypeScript types.                                                            |
| [orientation](./src/orientation/README.md)     | Represent horizontal and vertical layout directions.                                                |
| [partial](./src/partial/README.md)             | Make nested properties optional at the TypeScript type level.                                       |
| [peel](./src/peel/README.md)                   | Split matching prefixes or balanced delimiters from the start of text.                              |
| [pick](./src/pick/README.md)                   | Copy selected enumerable own string-keyed properties into a new object.                             |
| [purge](./src/purge/README.md)                 | Remove an explicitly undefined property from an object.                                             |
| [required](./src/required/README.md)           | Require nested properties or selected keys at the TypeScript type level.                            |
| [serialize](./src/serialize/README.md)         | Serialize values, parse JSON, and compose deserializers.                                            |
| [server](./src/server/README.md)               | Describe a server connection and build its configuration.                                           |
| [set-first](./src/set-first/README.md)         | Adapt an array of values to a setter that accepts one value.                                        |
| [sleep](./src/sleep/README.md)                 | Wait asynchronously using a timer.                                                                  |
| [tag](./src/tag/README.md)                     | Tag template literals with language names for editor syntax highlighting.                           |
| [try](./src/try/README.md)                     | Return fallbacks when operations throw, promises reject, or JSON input cannot be parsed.            |
