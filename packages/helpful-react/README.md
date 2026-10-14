# Helpful React

This package provides useful hooks and functions that help with frontend
development using React.

## Installation

```sh
npm install @zthun/helpful-react
yarn add @zthun/helpful-react
```

## Features

Import the public exports in these guides from `@zthun/helpful-react`. Use
`import type` for type-only exports.

Call hooks from React components or custom hooks.

| Feature                                                | Description                                                                    |
| ------------------------------------------------------ | ------------------------------------------------------------------------------ |
| [ambassador-state](./src/ambassador-state/README.md)   | Support either externally controlled state or local component state.           |
| [async-state](./src/async-state/README.md)             | Load asynchronous data and distinguish loading, loaded, and error states.      |
| [file-select](./src/file-select/README.md)             | Open a browser file picker through a service and React context.                |
| [keyboard-activate](./src/keyboard-activate/README.md) | Create keyboard activation handlers for focusable elements.                    |
| [state-as-array](./src/state-as-array/README.md)       | Keep component state in array form while accepting single values or arrays.    |
| [sync-state](./src/sync-state/README.md)               | Keep editable local state synchronized with changes to an initial value.       |
| [view-state](./src/view-state/README.md)               | Load a page and its item count independently from a helpful-query data source. |
| [window](./src/window/README.md)                       | Access the global object through an overridable React context.                 |
