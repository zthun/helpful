# Helpful Validation

A basic package that extends
[class-validator](https://www.npmjs.com/package/class-validator) with additional
checks that are not supported natively.

## Installation

```sh
npm install @zthun/helpful-validation
yarn add @zthun/helpful-validation
```

## Features

Import the public exports in these guides from `@zthun/helpful-validation`. Use
`import type` for type-only exports.

| Feature                                          | Description                                                       |
| ------------------------------------------------ | ----------------------------------------------------------------- |
| [data-uri](./src/data-uri/README.md)             | Constrain the character length of the data section of a data URI. |
| [other-property](./src/other-property/README.md) | Validate a property against another property on the same object.  |
| [white-space](./src/white-space/README.md)       | Reject strings that are empty or contain only whitespace.         |
