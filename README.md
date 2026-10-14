# Description

In every project I've ever worked on, I've needed some kind of shared repository
of code that I reuse over and over again. For JavaScript,
[lodash](https://lodash.com/) solves this problem for most people.

Lodash does not provide everything and anything. Thus, I created helpful, a
series of packages that add lots of reusable functions, classes, shapes, and
hooks that get used across projects.

## Packages

| Name                                                                 | For                                                                                    |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [@zthun/helpful-brands](./packages/helpful-brands/README.md)         | A library of decent static data for testing                                            |
| [@zthun/helpful-fn](./packages/helpful-fn/README.md)                 | A collection of helpful functions and classes. This is stuff you don't find in lodash. |
| [@zthun/helpful-query](./packages/helpful-query/README.md)           | Implements the source pattern.                                                         |
| [@zthun/helpful-reflection](./packages/helpful-reflection/README.md) | Decorators for TypeScript classes.                                                     |
| [@zthun/helpful-validation](./packages/helpful-validation/README.md) | Extensions to the class-validator library that adds some useful decorators.            |
