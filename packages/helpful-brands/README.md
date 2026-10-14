# Helpful Brands

This package contains an object structure and a builder for different brands.
The current list of supported brands is a subset of those found in
[Font Awesome's Brand Family](https://fontawesome.com/search?o=r&m=free&f=brands).

This package is mostly used for demos and testing of UI components.

## Installation

```sh
# NPM
npm install @zthun/helpful-brands --save-dev
# Yarn
yarn add @zthun/helpful-brands --dev
```

## Usage

Usage of this library mostly revolves around the brand interface and the builder
that accompanies it.

```ts
import { IZBrand, ZBrandBuilder } from "@zthun/helpful-brands";

// Constructs a new brand with a given id and name.
const brand: IZBrand = new ZBrandBuilder()
  .id("facebook")
  .name("Facebook")
  .founded(2004)
  .owner("Meta Platforms")
  .build();

// Some brands are automatically supported out of the box.
const facebook = new ZBrandBuilder().facebook().build();
const x = new ZBrandBuilder().twitter().build();
const instagram = new ZBrandBuilder().instagram().build();
```

If you need a list of all supported brands in an array, you can retrieve one by
just importing the ZBrands array.

```ts
import { ZBrands } from "@zthun/helpful-brands";

// Contains all brands that are supported out of the box by ZBrandBuilder().
// The ZBrands array is frozen and immutable, so you won't be able
// to change anything in it. If you need a mutable array, you must slice the
// ZBrands array.
const brands = ZBrands.slice();
```
