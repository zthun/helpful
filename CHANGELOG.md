# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## <small>9.11.7 (2026-02-09)</small>

* feat: cast enum tries to cast a value to an enum value set ([dc7e0ff](https://github.com/zthun/helpful/commit/dc7e0ff))
* feat: cast number tries to cast a candidate to a number and falls back if it is not possible ([c904270](https://github.com/zthun/helpful/commit/c904270))
* feat: is enum determines if a candidate value can represent an object value enumeration ([6b97947](https://github.com/zthun/helpful/commit/6b97947))
* test: we have enums already ([ead6e98](https://github.com/zthun/helpful/commit/ead6e98))
* fix: enum, CalendarMonth is now properly named ZCalendarMonth ([89ffeee](https://github.com/zthun/helpful/commit/89ffeee))
* refactor: declare calendar month as enum ([e9cd700](https://github.com/zthun/helpful/commit/e9cd700))
* chore: update yarn lockfile [skip ci] ([b025f95](https://github.com/zthun/helpful/commit/b025f95))





## <small>9.11.6 (2026-02-09)</small>

* test: just keep it simple ([a6fb05f](https://github.com/zthun/helpful/commit/a6fb05f))
* test: simplify ([0834d16](https://github.com/zthun/helpful/commit/0834d16))
* test: validate that date only formats keep the time midnight user time ([74d28ed](https://github.com/zthun/helpful/commit/74d28ed))
* refactor: parse date should respect the timezone default ([21e50f5](https://github.com/zthun/helpful/commit/21e50f5))
* refactor: support all english and japan ([011f07e](https://github.com/zthun/helpful/commit/011f07e))
* feat: added support for date time operations from clocks ([907216c](https://github.com/zthun/helpful/commit/907216c))
* feat: calendar month gives the index offsets for better date initialization ([4e59fe6](https://github.com/zthun/helpful/commit/4e59fe6))
* feat: format date time formats a guessable date ([56ceefe](https://github.com/zthun/helpful/commit/56ceefe))
* feat: guess date guesses a date object out of a list of supported formats ([df1801c](https://github.com/zthun/helpful/commit/df1801c))
* feat: parse date parses a date value given a format specifier ([86bcc68](https://github.com/zthun/helpful/commit/86bcc68))
* feat: timezone let's you retrieve the user time zone and all available time zones ([6e8e6c6](https://github.com/zthun/helpful/commit/6e8e6c6))
* feat: you can now retrieve the users  culture and supported cultures (locale) ([133ed6f](https://github.com/zthun/helpful/commit/133ed6f))
* chore: check for a valid date in the case NaN is passed ([cc605a1](https://github.com/zthun/helpful/commit/cc605a1))
* chore: date-fns dependency ([8398a96](https://github.com/zthun/helpful/commit/8398a96))
* chore: update yarn lockfile [skip ci] ([6495845](https://github.com/zthun/helpful/commit/6495845))
* build: update outdated packages ([81a7acc](https://github.com/zthun/helpful/commit/81a7acc))





## <small>9.11.5 (2026-02-01)</small>

* feat: try json parse allows you to attempt to parse json and return a fallback ([689505e](https://github.com/zthun/helpful/commit/689505e))
* refactor: move to more generic try directory ([1ffe3e7](https://github.com/zthun/helpful/commit/1ffe3e7))
* chore: update yarn lockfile [skip ci] ([5a89e25](https://github.com/zthun/helpful/commit/5a89e25))





## <small>9.11.4 (2026-01-31)</small>

* build: update outdated packages ([a29a3bf](https://github.com/zthun/helpful/commit/a29a3bf))
* chore: update yarn lockfile [skip ci] ([5709b40](https://github.com/zthun/helpful/commit/5709b40))





## [9.11.3](https://github.com/zthun/helpful/compare/v9.11.2...v9.11.3) (2026-01-04)

**Note:** Version bump only for package @zthun/helpful





## [9.11.2](https://github.com/zthun/helpful/compare/v9.11.1...v9.11.2) (2026-01-02)

**Note:** Version bump only for package @zthun/helpful





## [9.11.1](https://github.com/zthun/helpful/compare/v9.11.0...v9.11.1) (2025-12-14)

**Note:** Version bump only for package @zthun/helpful





## [9.11.0](https://github.com/zthun/helpful/compare/v9.10.1...v9.11.0) (2025-10-30)


### Features

* pickEvents picks all properties that start with the text, on ([40e6b66](https://github.com/zthun/helpful/commit/40e6b6616d570b129e727915128ac88d349d1793))



## [9.10.1](https://github.com/zthun/helpful/compare/v9.10.0...v9.10.1) (2025-10-29)

**Note:** Version bump only for package @zthun/helpful





## [9.10.0](https://github.com/zthun/helpful/compare/v9.9.0...v9.10.0) (2025-10-25)


### Features

* cast extension will take a string and make sure it's a proper extension format ([638a1a8](https://github.com/zthun/helpful/commit/638a1a8885791b024de749519149408e512502bc))



## [9.9.0](https://github.com/zthun/helpful/compare/v9.8.0...v9.9.0) (2025-10-24)


### Features

* mutable types remove the readonly flags for builder mutations ([bdbd1ba](https://github.com/zthun/helpful/commit/bdbd1ba58a7d0be82d824c311dd2c4de427157e9))



## [9.8.0](https://github.com/zthun/helpful/compare/v9.7.1...v9.8.0) (2025-10-23)


### ⚠ BREAKING CHANGES

* update output target to es2020

### Features

* added file size to byte helper functions ([3d386f7](https://github.com/zthun/helpful/commit/3d386f7b87ffb601cfda771e21a641c72de8add5))
* number like describe types that can represent numbers ([3883e87](https://github.com/zthun/helpful/commit/3883e8747d52c1046bd9c5c3fad2d870b5849f37))


### Build System

* update output target to es2020 ([3c22da9](https://github.com/zthun/helpful/commit/3c22da9ee319dcbc8714ffba56400b088bc9e333))



## [9.7.1](https://github.com/zthun/helpful/compare/v9.7.0...v9.7.1) (2025-10-19)

**Note:** Version bump only for package @zthun/helpful





## [9.7.0](https://github.com/zthun/helpful/compare/v9.6.0...v9.7.0) (2025-10-19)


### Features

* filter binary now supports starts with and ends with ([ae6301e](https://github.com/zthun/helpful/commit/ae6301eed8eb078b7b78f18f17c774d4749db23b))



## [9.6.0](https://github.com/zthun/helpful/compare/v9.5.1...v9.6.0) (2025-10-14)


### Features

* useSyncState add support for a state that updates when ([5ecde96](https://github.com/zthun/helpful/commit/5ecde967fc392cb41a6e24f117b807a72d2cee26))



## [9.5.1](https://github.com/zthun/helpful/compare/v9.5.0...v9.5.1) (2025-10-12)

**Note:** Version bump only for package @zthun/helpful





## [9.5.0](https://github.com/zthun/helpful/compare/v9.4.5...v9.5.0) (2025-10-11)


### Features

* added an aggregate model ([f649096](https://github.com/zthun/helpful/commit/f649096f1be47bb5332cbaca30bbcf8ea0c356f4))



## [9.4.5](https://github.com/zthun/helpful/compare/v9.4.4...v9.4.5) (2025-10-04)

**Note:** Version bump only for package @zthun/helpful





## [9.4.4](https://github.com/zthun/helpful/compare/v9.4.3...v9.4.4) (2025-09-09)

**Note:** Version bump only for package @zthun/helpful





## [9.4.3](https://github.com/zthun/helpful/compare/v9.4.2...v9.4.3) (2025-09-06)

**Note:** Version bump only for package @zthun/helpful





## [9.4.2](https://github.com/zthun/helpful/compare/v9.4.1...v9.4.2) (2025-07-18)

**Note:** Version bump only for package @zthun/helpful





## [9.4.1](https://github.com/zthun/helpful/compare/v9.4.0...v9.4.1) (2025-06-22)

**Note:** Version bump only for package @zthun/helpful





## [9.4.0](https://github.com/zthun/helpful/compare/v9.3.0...v9.4.0) (2025-06-21)


### Features

* detokenize allows you to replace interpolation token values in a string ([969808d](https://github.com/zthun/helpful/commit/969808dbb72c4763ed8d272792d4069a152e68bb))
* metadata can now supply a fallback value for the field ([188d214](https://github.com/zthun/helpful/commit/188d214853926bb9d2c9bf47f1be1dbfd881b7b1))
* nullable and optional types make it quick to declare or null or undefined ([b685927](https://github.com/zthun/helpful/commit/b685927a737232926198f27141f6c762095bf5e7))



## [9.3.0](https://github.com/zthun/helpful/compare/v9.2.0...v9.3.0) (2025-06-20)


### Features

* metadata file has been added ([de3e24b](https://github.com/zthun/helpful/commit/de3e24bbf506584844adda406c9029f847055fc5))


### Bug Fixes

* well known icon classes is now an enum in lieu of an abstract class ([451cce7](https://github.com/zthun/helpful/commit/451cce748fef279064cc6ac54f89b7c8a94972e5))



## [9.2.0](https://github.com/zthun/helpful/compare/v9.1.0...v9.2.0) (2025-06-18)


### Features

* brand data source factory creates a data source to query brands ([e5dd469](https://github.com/zthun/helpful/commit/e5dd46920615d0f0567bd4a8081fed5a94d55f6f))
* you can now retrieve the metadata for a brand object ([d31d032](https://github.com/zthun/helpful/commit/d31d032509731f1e34c91b1d91a8179ace3bb345))



## [9.1.0](https://github.com/zthun/helpful/compare/v9.0.0...v9.1.0) (2025-06-17)


### Features

* add boolean type to metadata ([004a956](https://github.com/zthun/helpful/commit/004a95667ecb53fb5839493120377da0d1d2952a))



## [9.0.0](https://github.com/zthun/helpful/compare/v8.0.0...v9.0.0) (2025-06-17)


### ⚠ BREAKING CHANGES

* all known brands from ZBrandBuilder have been moved to ZBrandKnown
* global array, ZBrands, has been replaced with ZBrandKnown.all()
* helpful-node has been removed

### Features

* helpful-node has been removed ([c6a6681](https://github.com/zthun/helpful/commit/c6a668114c9a74709706f03462c37ff50db72f7d))
* helpful-reflection add helpful decorators based on reflect-metadata ([86f8f50](https://github.com/zthun/helpful/commit/86f8f50b86bb001ded6012f2a037aaf9f1cb2b9c))
* tag allows you to decorate any method to take it with a label ([efe9cfe](https://github.com/zthun/helpful/commit/efe9cfed5a828cc963177c629a4d836deb3da15f))


### Bug Fixes

* separates type imports from shakable imports ([80e6e94](https://github.com/zthun/helpful/commit/80e6e94040e8d337bb6047ff70bf99fdeb5b0a80))


### Code Refactoring

* all known brands from ZBrandBuilder have been moved to ZBrandKnown ([df8cc41](https://github.com/zthun/helpful/commit/df8cc41a6a9f0dfbd22438db0d8b0897db7c2bc0))
* global array, ZBrands, has been replaced with ZBrandKnown.all() ([aabd57f](https://github.com/zthun/helpful/commit/aabd57fb1bbae8de9cacc03294c7502e47819b47))



## [8.0.0](https://github.com/zthun/helpful/compare/v7.2.1...v8.0.0) (2025-06-10)


### ⚠ BREAKING CHANGES

* file system and walk have been deleted
* build now uses node next module resolution

### Features

* file system and walk have been deleted ([3e88f38](https://github.com/zthun/helpful/commit/3e88f38b916d0973f2520566526efbd1519ed6af))


### Build System

* build now uses node next module resolution ([2129477](https://github.com/zthun/helpful/commit/2129477b1288402b91f2a1f5c4bd583e5eaeb620))



## [7.2.1](https://github.com/zthun/helpful/compare/v7.2.0...v7.2.1) (2025-05-23)

**Note:** Version bump only for package @zthun/helpful





## [7.2.0](https://github.com/zthun/helpful/compare/v7.1.0...v7.2.0) (2025-01-05)


### Features

* added a generic file system token ([f76f5f6](https://github.com/zthun/helpful/commit/f76f5f603b4828b9b09843e7d3932788b689705c))
* added a lazy class for lazy instantiation of values ([e0425ce](https://github.com/zthun/helpful/commit/e0425cedbb61f1914a89cb867f0d1618a11ea537))
* added types for suppliers ([dbe8bca](https://github.com/zthun/helpful/commit/dbe8bca97face33e2fc05df68e90bc1c85a71f71))



## [7.1.0](https://github.com/zthun/helpful/compare/v7.0.5...v7.1.0) (2025-01-05)


### Features

* file system service gives information about files in a easy unit testable way ([bed516f](https://github.com/zthun/helpful/commit/bed516fb83b4762da46e52e66fd7495081058dad))
* purge removes properties if they are undefined ([0aa71bb](https://github.com/zthun/helpful/commit/0aa71bb95470042aff4ba54b9670188ca71a6137))



## [7.0.5](https://github.com/zthun/helpful/compare/v7.0.4...v7.0.5) (2025-01-03)

**Note:** Version bump only for package @zthun/helpful





## [7.0.4](https://github.com/zthun/helpful/compare/v7.0.2...v7.0.4) (2025-01-03)


### Bug Fixes

* allow for peer dependencies installed as dev dependencies to be external ([0bbc387](https://github.com/zthun/helpful/commit/0bbc38714a31eee9f4231776f2d9c419b44f14ad))



## [7.0.2](https://github.com/zthun/helpful/compare/v7.0.1...v7.0.2) (2025-01-03)

**Note:** Version bump only for package @zthun/helpful





## [7.0.1](https://github.com/zthun/helpful/compare/v7.0.0...v7.0.1) (2025-01-03)

**Note:** Version bump only for package @zthun/helpful





## [7.0.0](https://github.com/zthun/helpful/compare/v6.7.2...v7.0.0) (2025-01-03)


### ⚠ BREAKING CHANGES

* helpful-proxy has been removed

### Build System

* helpful-proxy has been removed ([f5f976f](https://github.com/zthun/helpful/commit/f5f976fe834843b7621cc8e74465ea16d5d3df24))



## [6.7.2](https://github.com/zthun/helpful/compare/v6.7.1...v6.7.2) (2025-01-02)


### Bug Fixes

* main should now be discoverable with module projects ([ce16690](https://github.com/zthun/helpful/commit/ce166906b78f0ba06c3593e8b6ff3e5bbb88e101))



## [6.7.1](https://github.com/zthun/helpful/compare/v6.7.0...v6.7.1) (2025-01-02)

**Note:** Version bump only for package @zthun/helpful





## [6.7.0](https://github.com/zthun/helpful/compare/v6.6.0...v6.7.0) (2024-12-29)


### Features

* add support for react 19 ([469a2de](https://github.com/zthun/helpful/commit/469a2dec6d94025b3db317bd2dee53a873fa833e))



## [6.6.0](https://github.com/zthun/helpful/compare/v6.5.2...v6.6.0) (2024-11-19)


### Features

* deep partial describes a recursive partial ([06ac8aa](https://github.com/zthun/helpful/commit/06ac8aa04e9a8d3b3b23ba6b3e8b2b10ef1cea47))



## [6.5.2](https://github.com/zthun/helpful/compare/v6.5.1...v6.5.2) (2024-11-05)

**Note:** Version bump only for package @zthun/helpful





## [6.5.1](https://github.com/zthun/helpful/compare/v6.5.0...v6.5.1) (2024-10-31)

**Note:** Version bump only for package @zthun/helpful





## [6.5.0](https://github.com/zthun/helpful/compare/v6.4.1...v6.5.0) (2024-10-27)


### Features

* rectangle attach matches two anchor points ([ca0d44b](https://github.com/zthun/helpful/commit/ca0d44b0e85f21386a6f7a8ba10e95e0c74ec018))



## [6.4.1](https://github.com/zthun/helpful/compare/v6.4.0...v6.4.1) (2024-10-27)


### Bug Fixes

* a quadrilateral copying a bounded client rect should no longer throw exceptions ([cffdc64](https://github.com/zthun/helpful/commit/cffdc645947069d32dcd73c87f0b40e230a5f2fb))



## [6.4.0](https://github.com/zthun/helpful/compare/v6.3.0...v6.4.0) (2024-10-27)


### Features

* rectangle offset to fit fits a candidate rectangle inside the target rectangle ([919d51e](https://github.com/zthun/helpful/commit/919d51e063f7898754e17801958b528ba154ed9a))



## [6.3.0](https://github.com/zthun/helpful/compare/v6.2.0...v6.3.0) (2024-09-14)


### Features

* isEmptyObject determines whether or not an object is considered empty ([c55ef09](https://github.com/zthun/helpful/commit/c55ef09a9b93e417ffd3abb13cd866b2779a7d7e))
* pick reduces an object by a key value predicate ([47db96d](https://github.com/zthun/helpful/commit/47db96db1e2023027a4ce87afef443f475a6c3f2))



## [6.2.0](https://github.com/zthun/helpful/compare/v6.1.0...v6.2.0) (2024-09-08)


### Features

* quadrilateral corners allow a set of 4 corner point descriptions ([fb3d9e4](https://github.com/zthun/helpful/commit/fb3d9e4dfbe30c8dedea8dbb2f9b8c6fd8957fb9))
* quadrilateral's can now be built from an object that describes a quadrilateral ([231626f](https://github.com/zthun/helpful/commit/231626f1ca0a0a15ce12af834aa8752147ef5e10))



## [6.1.0](https://github.com/zthun/helpful/compare/v6.0.0...v6.1.0) (2024-09-08)


### Features

* required deep recursively requires all properties in a type ([3b30fc2](https://github.com/zthun/helpful/commit/3b30fc20a3a74aa47ca5dc5c9b00ccf51a430267))
* required pick picks specific properties to be required ([ca1e22e](https://github.com/zthun/helpful/commit/ca1e22e0ab3fa09091e1f4d77707a56e85173b7e))



## [6.0.0](https://github.com/zthun/helpful/compare/v5.0.3...v6.0.0) (2024-09-01)


### ⚠ BREAKING CHANGES

* helpful-proxy is now an esm module

### Features

* helpful-proxy is now an esm module ([950433a](https://github.com/zthun/helpful/commit/950433ad553bff82d20cdc3a12a6d2bd7e33c748))



## [5.0.3](https://github.com/zthun/helpful/compare/v5.0.2...v5.0.3) (2024-07-15)

**Note:** Version bump only for package @zthun/helpful





## [5.0.2](https://github.com/zthun/helpful/compare/v5.0.1...v5.0.2) (2024-07-06)

**Note:** Version bump only for package @zthun/helpful





## [5.0.1](https://github.com/zthun/helpful/compare/v5.0.0...v5.0.1) (2024-04-21)

**Note:** Version bump only for package @zthun/helpful





## [5.0.0](https://github.com/zthun/helpful/compare/v4.1.2...v5.0.0) (2024-04-11)


### ⚠ BREAKING CHANGES

* removed the sort parser in favor of ZSortDeserialize
* removed the filter parser in favor of ZFilterDeserialize
* deprecated comparator alias' have been removed
* trilean has been removed
* helpful-dom is removed and no longer maintained

### Features

* deprecated comparator alias' have been removed ([43464bb](https://github.com/zthun/helpful/commit/43464bbb529fa065923149ea24e4a9c070f4d1e7))
* helpful-dom is removed and no longer maintained ([1bfc545](https://github.com/zthun/helpful/commit/1bfc545c75587a232c0d0002c1d604f6680baa85))
* removed the filter parser in favor of ZFilterDeserialize ([5a6b8c3](https://github.com/zthun/helpful/commit/5a6b8c38b3c674a2d421995fdb48486ef2593860))
* removed the sort parser in favor of ZSortDeserialize ([cb86854](https://github.com/zthun/helpful/commit/cb868549665c10e78a8ca3748dfe0f41c47ef65a))
* trilean has been removed ([629db7a](https://github.com/zthun/helpful/commit/629db7a7deb8ab0fc832a6143b904613cac0911c))



## [4.1.2](https://github.com/zthun/helpful/compare/v4.1.1...v4.1.2) (2024-04-11)


### Bug Fixes

* deprecate stuff that has been moved to spellcraft ([a8f6776](https://github.com/zthun/helpful/commit/a8f677651273d6e4cba5fa6ec423ffdcad799ed8))



## [4.1.1](https://github.com/zthun/helpful/compare/v4.1.0...v4.1.1) (2024-04-09)

**Note:** Version bump only for package @zthun/helpful





## [4.1.0](https://github.com/zthun/helpful/compare/v4.0.4...v4.1.0) (2024-04-02)


### Features

* added shell tags ([2fb7bd6](https://github.com/zthun/helpful/commit/2fb7bd67d52b177c00d5d6b13877866ccfc69886))



## [4.0.4](https://github.com/zthun/helpful/compare/v4.0.3...v4.0.4) (2024-03-29)


### Bug Fixes

* import trilean from @zthun/trilean instead of helpful-fn ([4fc25e2](https://github.com/zthun/helpful/commit/4fc25e25a4509349a388afdf7fd4b555302a308c))



## [4.0.3](https://github.com/zthun/helpful/compare/v4.0.2...v4.0.3) (2024-03-29)

**Note:** Version bump only for package @zthun/helpful





## [4.0.2](https://github.com/zthun/helpful/compare/v4.0.1...v4.0.2) (2024-03-29)

**Note:** Version bump only for package @zthun/helpful





## [4.0.1](https://github.com/zthun/helpful/compare/v4.0.0...v4.0.1) (2024-03-25)


### Bug Fixes

* export rectangle object ([ab9734f](https://github.com/zthun/helpful/commit/ab9734f04edab7d6497c36e9b8c3211c74dfbe9d))



## [4.0.0](https://github.com/zthun/helpful/compare/v3.16.1...v4.0.0) (2024-03-25)


### ⚠ BREAKING CHANGES

* square and rectangle functions have been removed from quadrilateral

### Features

* a rectangle object helps in calculating rectangular geometry for a quadrilateral ([12d5e5f](https://github.com/zthun/helpful/commit/12d5e5fe4839431cf6a8e78c6c4e20075e94bd07))


### Code Refactoring

* square and rectangle functions have been removed from quadrilateral ([9c08f66](https://github.com/zthun/helpful/commit/9c08f66e04ffe8b8bed06789920215961203fe03))



## [3.16.1](https://github.com/zthun/helpful/compare/v3.16.0...v3.16.1) (2024-03-19)

**Note:** Version bump only for package @zthun/helpful





## [3.16.0](https://github.com/zthun/helpful/compare/v3.15.1...v3.16.0) (2024-03-09)


### Features

* added support for trilean types ([2b4f0f9](https://github.com/zthun/helpful/commit/2b4f0f99307cf36a51b09ba45d931c22526c60bb))
* trilean type is now a part of an intrinsic type ([671132f](https://github.com/zthun/helpful/commit/671132f87dec1f5f351480831cc3e433c865d3e2))
* you can now create trilean types for an attribute ([24f56ad](https://github.com/zthun/helpful/commit/24f56adf4cf70bb1e44af548caca85e86adf9222))



## [3.15.1](https://github.com/zthun/helpful/compare/v3.15.0...v3.15.1) (2024-03-08)


### Bug Fixes

* shadow component now calls the super's disconnectedCallback ([618724f](https://github.com/zthun/helpful/commit/618724f5396d56830e60c777a23e9517462ba10e))



## [3.15.0](https://github.com/zthun/helpful/compare/v3.14.0...v3.15.0) (2024-03-08)


### Features

* nullable attribute values are now supported ([8e7fb97](https://github.com/zthun/helpful/commit/8e7fb97e9b0861098fd3fab9a25fba804dd9d88c))



## [3.14.0](https://github.com/zthun/helpful/compare/v3.13.0...v3.14.0) (2024-03-02)


### Features

* a background component is a component that exists to supply values to a host ([555233c](https://github.com/zthun/helpful/commit/555233c407178e5fac653195238c89a62398d663))
* nodePaint adds a helper to clear a node and add a style and template node ([106e79f](https://github.com/zthun/helpful/commit/106e79fa380c0b7d962ea81648cd700224849b3c))
* shadow component now supports listening for events from background components ([0d6c453](https://github.com/zthun/helpful/commit/0d6c453d7b5cffc5b45ae954d627b7cf6041b22c))



## [3.13.0](https://github.com/zthun/helpful/compare/v3.12.2...v3.13.0) (2024-03-02)


### Features

* firstDefined has been expanded to firstWhere and firstTruthy ([0b4a648](https://github.com/zthun/helpful/commit/0b4a6489db738783b68038f9d4a85e4df0babda0))



## [3.12.2](https://github.com/zthun/helpful/compare/v3.12.1...v3.12.2) (2024-03-01)


### Bug Fixes

* added dependencies so custom element dependencies are not removed by tree shaking ([b3b9332](https://github.com/zthun/helpful/commit/b3b9332baf6da79be84ede05331fd01ca092ab91))



## [3.12.1](https://github.com/zthun/helpful/compare/v3.12.0...v3.12.1) (2024-03-01)


### Bug Fixes

* className can also be an array to allow multiple classes without spaces ([3efe4b2](https://github.com/zthun/helpful/commit/3efe4b2d83785b100b460c100e1449194b6e675f))



## [3.12.0](https://github.com/zthun/helpful/compare/v3.11.1...v3.12.0) (2024-03-01)


### Features

* allow a shadow component to specify tag and root class name ([c234df8](https://github.com/zthun/helpful/commit/c234df8b7c46f44b5e233cc880e519fd6f984c7a))



## [3.11.1](https://github.com/zthun/helpful/compare/v3.11.0...v3.11.1) (2024-03-01)


### Bug Fixes

* actual attribute name should be the passed value, not literal 'name' ([931cf06](https://github.com/zthun/helpful/commit/931cf06af25dbda87754a1f1c0e18ff34a7461ba))



## [3.11.0](https://github.com/zthun/helpful/compare/v3.10.1...v3.11.0) (2024-03-01)


### Features

* component render adds the signature for components built with component shadow ([66dd868](https://github.com/zthun/helpful/commit/66dd868ed2bcc522f3c444513d5be98e988aedfa))
* easily construct a web component without boilerplate using a the component shadow decorator ([1997273](https://github.com/zthun/helpful/commit/19972731be97daa1e4a40bd7255387cd12943596))
* stringify attribute makes it easier to convert values to interpolated xml attribute values ([6c63f48](https://github.com/zthun/helpful/commit/6c63f48c39a32aaa51cb078f5946031ce03b9f0b))
* tag allows for IDE highlighting hints for template strings ([e995f7d](https://github.com/zthun/helpful/commit/e995f7de979bffc3902a7cd4d3d06a48e36b2f2a))



## [3.10.1](https://github.com/zthun/helpful/compare/v3.10.0...v3.10.1) (2024-02-27)


### Bug Fixes

* booleans can now have proper fallbacks in attributes ([25f1336](https://github.com/zthun/helpful/commit/25f13367bcc3120bf146d23705194ee1709cc76e))



## [3.10.0](https://github.com/zthun/helpful/compare/v3.9.0...v3.10.0) (2024-02-25)


### Features

* component attribute allows web component properties backed by attributes ([14d327e](https://github.com/zthun/helpful/commit/14d327e245677d7842afbd6042a83b3c57626be1))
* schema allows defining metadata for an object ([1432df9](https://github.com/zthun/helpful/commit/1432df9e8b4da12735fcb91f655a7574ebc9faa2))



## [3.9.0](https://github.com/zthun/helpful/compare/v3.8.0...v3.9.0) (2024-02-21)


### Features

* you can now set an auto data attribute on an Element if you mark the property to do so ([822d961](https://github.com/zthun/helpful/commit/822d961b00f56a3d6201a47a4b90de1988052b86))



## [3.8.0](https://github.com/zthun/helpful/compare/v3.7.3...v3.8.0) (2024-02-20)


### Features

* property change events help with tracking when properties on a web component change ([3bd79e3](https://github.com/zthun/helpful/commit/3bd79e3e06a44c9c03b6b086562b7380e6035dfd))
* web component life cycle event interfaces help define the lifecycle events in components ([f70e3d6](https://github.com/zthun/helpful/commit/f70e3d67275f62c66b2ddb4a2bc7e91eca6a4614))



## [3.7.3](https://github.com/zthun/helpful/compare/v3.7.2...v3.7.3) (2024-02-20)


### Bug Fixes

* registerCustomElements can now extend build in elements properly ([0328385](https://github.com/zthun/helpful/commit/03283857f509461a3cf4ec2e8f3300ea8d8624bc))



## [3.7.2](https://github.com/zthun/helpful/compare/v3.7.1...v3.7.2) (2024-02-19)


### Bug Fixes

* helpful dom should now reference the correct version of helpful-fn ([71ce836](https://github.com/zthun/helpful/commit/71ce836694519e37a66d34d87c49dad28b5f0142))



## [3.7.1](https://github.com/zthun/helpful/compare/v3.7.0...v3.7.1) (2024-02-19)


### Bug Fixes

* new functions are now exported ([c9dafda](https://github.com/zthun/helpful/commit/c9dafdaba984d4254490d7c7c009f1f8753fb51a))



## [3.7.0](https://github.com/zthun/helpful/compare/v3.6.0...v3.7.0) (2024-02-19)


### Features

* css variable allows you to construct a var reference easily without interpolation ([78f43a2](https://github.com/zthun/helpful/commit/78f43a2a76525cf928287adc6cf697fc861aa0c6))
* mutate attribute either removes an attribute for a null value or sets for a defined value ([26ee3c3](https://github.com/zthun/helpful/commit/26ee3c3a26754bc5b867b93b478f181b84f5f68c))
* query attribute adds support for getAttribute with a fallback ([1140927](https://github.com/zthun/helpful/commit/114092758d823f7f5a2629bdfe4a942cf1fda10a))



## [3.6.0](https://github.com/zthun/helpful/compare/v3.5.0...v3.6.0) (2024-02-19)


### Features

* added helpful geometry objects ([28a8913](https://github.com/zthun/helpful/commit/28a8913efa69b82be38fcc9555fec69ae2cc34d6))



## [3.5.0](https://github.com/zthun/helpful/compare/v3.4.0...v3.5.0) (2024-02-16)


### Features

* helpful-dom adds methods that help with browser only capabilities ([4117423](https://github.com/zthun/helpful/commit/4117423d6c6a05f780abb44874f7d8e8bdee2490))



## [3.4.0](https://github.com/zthun/helpful/compare/v3.3.1...v3.4.0) (2024-02-15)


### Features

* $global returns the globalThis object ([3674d8f](https://github.com/zthun/helpful/commit/3674d8f02d4cc861857da2f54b6c7106e1e8e17d))



## [3.3.1](https://github.com/zthun/helpful/compare/v3.3.0...v3.3.1) (2024-02-09)


### Bug Fixes

* exported serializer and deserializer ([dfd742c](https://github.com/zthun/helpful/commit/dfd742ccc68d0bec27f90b50d229d22f1a7fb2c4))



## [3.3.0](https://github.com/zthun/helpful/compare/v3.2.1...v3.3.0) (2024-02-09)


### Features

* added serializer and deserializer interfaces ([ee66a02](https://github.com/zthun/helpful/commit/ee66a024a8e2eee1b0c2bc78054379bf6f44a6da))
* deserialize-json enables schema based json deserialization ([5fb775c](https://github.com/zthun/helpful/commit/5fb775c819611a71f15b90dd17b21460b7a837a8))
* deserialize-try allows for composite deserialization ([2e2b2d0](https://github.com/zthun/helpful/commit/2e2b2d04e7ff160e56b1aa06fe9d71c654d87685))
* filter type guards now accept null and undefined as test candidates ([05a9628](https://github.com/zthun/helpful/commit/05a9628121ac3500a0bd3b0c306485279f492556))
* filter-deserialize will parse a filter from a string ([a5fd78e](https://github.com/zthun/helpful/commit/a5fd78e2c391a2e7fb408cdceab4029534f0002f))
* filter-serialize converts a filter to a human readable string ([3d0c6eb](https://github.com/zthun/helpful/commit/3d0c6ebf3d5da9aa4b2f6f984cd19f60cfb4609d))
* serialize json enables pretty printing a json object ([6b277bc](https://github.com/zthun/helpful/commit/6b277bc228554f177514ebfcff2d8acc620c2593))
* sort lists can now be serialized ([70e9f74](https://github.com/zthun/helpful/commit/70e9f74d1a841fe0d641ac19901389b0d098d934))
* static data source can now update items at an index ([d2e159e](https://github.com/zthun/helpful/commit/d2e159ed71ade6c4093f6600bedf735fc92dd00d))
* static data source can remove items ([58b826f](https://github.com/zthun/helpful/commit/58b826f692336a9dc69dd99a3d685e6ac42468ac))
* you can now insert items in a data source static ([32ce2c1](https://github.com/zthun/helpful/commit/32ce2c190c64ca447db69cca4c8de458acbf2a27))



## [3.2.1](https://github.com/zthun/helpful/compare/v3.2.0...v3.2.1) (2024-02-06)


### Bug Fixes

* undefined window should no longer fail builds on typescript apps ([b127a4c](https://github.com/zthun/helpful/commit/b127a4c9e9914d282a237c223635373d3bb816e3))



## [3.2.0](https://github.com/zthun/helpful/compare/v3.1.0...v3.2.0) (2024-01-15)


### Features

* a sort parser is used to parse a sort ([1f296f3](https://github.com/zthun/helpful/commit/1f296f336ade07445ada1238e7b9a7418e2800df))
* filter parse supports unary filters ([0e215ba](https://github.com/zthun/helpful/commit/0e215ba8b1a93786d81221d44f7b089fabb21448))
* filter parser parses collection filters ([0530a71](https://github.com/zthun/helpful/commit/0530a71ff8890916d08dfda55e125a2d2a07d5e6))
* filter parser supports logic filters ([bf32fab](https://github.com/zthun/helpful/commit/bf32fab1206cb484ecb676678d436187a50e1dce))
* logic operators can now be set dynamically ([f9b3901](https://github.com/zthun/helpful/commit/f9b390188282b2b0b2cfa9277fbec310de7e3233))
* peel allows to split strings based on token rules ([9926a5e](https://github.com/zthun/helpful/commit/9926a5eea8c9f058a76126927bd12296d9ee62c2))
* sort builder can now set all sorts at once ([cab5a3e](https://github.com/zthun/helpful/commit/cab5a3e4d836f0f56a7a510c1d01198f16b2836c))
* the filter parser can parse a binary filter from a string ([fb4b29a](https://github.com/zthun/helpful/commit/fb4b29af0d3064a4ce4742b031978e252aeac923))
* the query method now supports the sort query argument ([0b153b4](https://github.com/zthun/helpful/commit/0b153b4ab76b60d0de70c22252168473d88d3c79))
* try fallback let's you try a function and then recover with a fallback value ([799e304](https://github.com/zthun/helpful/commit/799e3040dd3553a2069ca65c239340dc11112e1c))
* you can now pass a string for a filter request ([068f145](https://github.com/zthun/helpful/commit/068f145e4615c560f018af44c262c5dc7973d874))
* you can now retrieve operators in a list ([bb601b0](https://github.com/zthun/helpful/commit/bb601b08179d3c2ac136335025f09f0fdfd3ab8f))
* you can now set the operator dynamically ([dd87361](https://github.com/zthun/helpful/commit/dd87361f41e92b71b7951079dc1269f6df7f6ea1))
* you can now set the operator dynamically for a collection filter ([4a22edf](https://github.com/zthun/helpful/commit/4a22edfb4fde34099a713af9fe69322819d01e46))



## [3.1.0](https://github.com/zthun/helpful/compare/v3.0.0...v3.1.0) (2023-11-24)


### Features

* website now has a favicon ([c7d5067](https://github.com/zthun/helpful/commit/c7d506713dc967ebccab57469cf2c7e2abbe5a47))



## [3.0.0](https://github.com/zthun/helpful/compare/v2.7.1...v3.0.0) (2023-11-24)


### ⚠ BREAKING CHANGES

* removed isDataUriType
* remove helpful-people
* helpful-obligation has been merged into helpful-fn
* remove helpful-api

### Features

* helpful-obligation has been merged into helpful-fn ([656b4f2](https://github.com/zthun/helpful/commit/656b4f295ecbe0fcb747cd1fe000782cca79c00d))
* helpful-web generates the typedoc website for helpful ([65bf17f](https://github.com/zthun/helpful/commit/65bf17fc58e9dec88f963c35e6c398cbd48ade23))
* remove helpful-people ([ae089fa](https://github.com/zthun/helpful/commit/ae089fa926f936377c437d3f21ea4675eb0758fa))
* removed isDataUriType ([a2f6fc1](https://github.com/zthun/helpful/commit/a2f6fc108919c8000e9160433943bb506330eee4))


### Bug Fixes

* count is refreshed when the scope changes ([b198f44](https://github.com/zthun/helpful/commit/b198f44e8f0a4bf726c76f6e90582af519265422))
* filter subject is now exported ([cfc97fd](https://github.com/zthun/helpful/commit/cfc97fdef705695a96f39b08cc44e4d70aac29af))


### Code Refactoring

* remove helpful-api ([22afcf2](https://github.com/zthun/helpful/commit/22afcf25d4b58cf9fd7b33d28d41d7f5e06f21ac))



## [2.7.1](https://github.com/zthun/helpful/compare/v2.7.0...v2.7.1) (2023-11-17)


### Bug Fixes

* walk starts at the current working directory ([16c68f8](https://github.com/zthun/helpful/commit/16c68f84b2e1da4162d9aafbe57e07f949b0d81c))



## [2.7.0](https://github.com/zthun/helpful/compare/v2.6.0...v2.7.0) (2023-11-17)


### Features

* helpful-node adds extended methods that extend the current node api ([10ab9b7](https://github.com/zthun/helpful/commit/10ab9b75c0b152e4cf1e3628801c0542a1d14e7d))
* walk finds a file or folder up the directory tree ([ee252b5](https://github.com/zthun/helpful/commit/ee252b52105873c9adacfe18ccce26017896e5eb))



## [2.6.0](https://github.com/zthun/helpful/compare/v2.5.0...v2.6.0) (2023-11-13)


### Features

* helpful api sidecar now contains a health endpoint ([9b4e64b](https://github.com/zthun/helpful/commit/9b4e64ba88c483cefbad7fc15dec00f7d208ea3a))



## [2.5.0](https://github.com/zthun/helpful/compare/v2.4.0...v2.5.0) (2023-11-13)


### Features

* helpful proxy adds a declarative reverse proxy for local development ([28cf6b1](https://github.com/zthun/helpful/commit/28cf6b114b2165f4fecb353714cb22f88680e45a))
* helpful proxy allows local development of a reverse proxy without the need for nginx configs ([334c999](https://github.com/zthun/helpful/commit/334c999aad4d270f6d47283ec5b38cfd83d26f5c))


### Bug Fixes

* include the bin folder in the package ([ff020c8](https://github.com/zthun/helpful/commit/ff020c8af41e18e86c45a9625e63288449502900))



## [2.4.0](https://github.com/zthun/helpful/compare/v2.3.0...v2.4.0) (2023-11-11)


### Features

* guid module generates guids (uuids) for use ([ed37462](https://github.com/zthun/helpful/commit/ed37462917a1b9356bd2a7f26755eb1ee850628f))
* helpful-api allows you to generate common data without the need for a language adapter ([56281f7](https://github.com/zthun/helpful/commit/56281f73dab92fe82729a472f181fa5c081b6c05))



## [2.3.0](https://github.com/zthun/helpful/compare/v2.2.1...v2.3.0) (2023-09-02)


### Features

* helpful-validation contains useful validations not found in class-validator ([22969dc](https://github.com/zthun/helpful/commit/22969dc9c4d5fe521d015881ce044f1343ec5ca5))



## [2.2.1](https://github.com/zthun/helpful/compare/v2.2.0...v2.2.1) (2023-08-19)


### Bug Fixes

* create error should now respect data as well ([bbc7ae5](https://github.com/zthun/helpful/commit/bbc7ae5f9664cb6cb8234f1e452e5993ebf41a84))



## [2.2.0](https://github.com/zthun/helpful/compare/v2.1.0...v2.2.0) (2023-08-19)


### Features

* create-error extracts error information from objects ([357d95a](https://github.com/zthun/helpful/commit/357d95a761c7fac8b01de47446a7b398c2c9503b))


### Bug Fixes

* error from useMoreViewState should have better extraction ([8b8d47c](https://github.com/zthun/helpful/commit/8b8d47cd3ffd4d33f62c730d35b8ae4567d273ad))
* error message from useAsyncState should now have better extraction ([f9a765e](https://github.com/zthun/helpful/commit/f9a765ea5e174c102550665844918cfed2bf544c))



## [2.1.0](https://github.com/zthun/helpful/compare/v2.0.0...v2.1.0) (2023-08-17)


### Features

* data request can be built from query params ([908dedd](https://github.com/zthun/helpful/commit/908dedd21493efaf97df68dbc007122de5731d35))
* page builder allows a representation of a page in an api ([b83feaf](https://github.com/zthun/helpful/commit/b83feaf4e26d38b7b9deb3231b883ee5471a9075))
* pieces of a request are removable ([4282a5b](https://github.com/zthun/helpful/commit/4282a5b750c5d82261ad483be24297bd68a7b8a0))



## [2.0.0](https://github.com/zthun/helpful/compare/v0.21.6...v2.0.0) (2023-08-15)


### ⚠ BREAKING CHANGES

* update to version 1.0.0
* stable release

### Features

* stable release ([cd0a160](https://github.com/zthun/helpful/commit/cd0a160385a131e2c8fc5bebe9a7e4ff25e00abf))
* update to version 1.0.0 ([e3c0666](https://github.com/zthun/helpful/commit/e3c06666ef0bc2c09bb2d12c2156a67533948c8f))



## [0.21.6](https://github.com/zthun/helpful/compare/v0.21.5...v0.21.6) (2023-08-15)


### Bug Fixes

* should no longer bundle @zthun/helpful-fn ([0a051fe](https://github.com/zthun/helpful/commit/0a051fed0f8896a12eb3e0fd8b3d6b4eef67fd9e))
* should no longer bundle uuid ([abcae97](https://github.com/zthun/helpful/commit/abcae97ab85b8096b5159020ffe635686bde49f0))



## [0.21.5](https://github.com/zthun/helpful/compare/v0.21.4...v0.21.5) (2023-08-12)


### Bug Fixes

* use common global ([7c155de](https://github.com/zthun/helpful/commit/7c155dee257d8361b0d5dbd61e48f5a7f979910a))



## [0.21.4](https://github.com/zthun/helpful/compare/v0.21.3...v0.21.4) (2023-08-12)


### Bug Fixes

* global declaration for node and browser ([65dba83](https://github.com/zthun/helpful/commit/65dba83afd69f314113ba96849ace5f8105452f8))



## [0.21.3](https://github.com/zthun/helpful/compare/v0.21.2...v0.21.3) (2023-08-12)

**Note:** Version bump only for package @zthun/helpful





## [0.21.2](https://github.com/zthun/helpful/compare/v0.21.1...v0.21.2) (2023-08-12)


### Bug Fixes

* fully qualify document object ([fc7e1d4](https://github.com/zthun/helpful/commit/fc7e1d465f56b2a637f3bc45e3c5c23a99d0aaa4))



## [0.21.1](https://github.com/zthun/helpful/compare/v0.21.0...v0.21.1) (2023-08-12)


### Bug Fixes

* export file select ([dc29181](https://github.com/zthun/helpful/commit/dc2918171a62b21ee7cb604f78f36b776641a030))



## [0.21.0](https://github.com/zthun/helpful/compare/v0.20.1...v0.21.0) (2023-08-12)


### Features

* file select allows users to select files from the file system ([8c97914](https://github.com/zthun/helpful/commit/8c979142fccab5afb9fa7b989035a41d7401125f))
* helpful internet has object builders for internet related entities ([068e0c8](https://github.com/zthun/helpful/commit/068e0c814f091c86dca742ccddd042dc9acb3dcf))
* window service give a dependency injectable global object ([ab1d77f](https://github.com/zthun/helpful/commit/ab1d77fd43c4fc6d8abe9d4b938055a3dc258a97))



## [0.20.1](https://github.com/zthun/helpful/compare/v0.20.0...v0.20.1) (2023-07-26)


### Bug Fixes

* last should now be set in useMoreViewState ([194189f](https://github.com/zthun/helpful/commit/194189f6c290053842b28d370a18c1d2d9060023))



## [0.20.0](https://github.com/zthun/helpful/compare/v0.19.0...v0.20.0) (2023-07-25)


### Features

* add support for complete state in useMoreViewState ([da62c7f](https://github.com/zthun/helpful/commit/da62c7fd77ce75ea54635f9d3330c9d334172016))
* useMoreViewState now supports a reset ([13e3d8e](https://github.com/zthun/helpful/commit/13e3d8e5708c8a20cffb6e35cceb4abf54f57cfb))



## [0.19.0](https://github.com/zthun/helpful/compare/v0.18.0...v0.19.0) (2023-07-25)


### Features

* useMoreState hook helps with building infinite scroll views ([ed184a6](https://github.com/zthun/helpful/commit/ed184a65e7dce98b2366a84a582eaa050d7c78e8))
* usePageViewState gives implementation for single page views ([11573e3](https://github.com/zthun/helpful/commit/11573e38a2293ccb279a9663d427fc58757525f3))



## [0.18.0](https://github.com/zthun/helpful/compare/v0.17.1...v0.18.0) (2023-07-15)


### Features

* useStateAsArray helps with single to array casting ([1ee08bb](https://github.com/zthun/helpful/commit/1ee08bb451e94f7eadeced77d730e5b2f05a75ee))



## [0.17.1](https://github.com/zthun/helpful/compare/v0.17.0...v0.17.1) (2023-07-15)

**Note:** Version bump only for package @zthun/helpful





## [0.17.0](https://github.com/zthun/helpful/compare/v0.16.2...v0.17.0) (2023-06-19)


### Features

* sleep can resolve with a value ([6653306](https://github.com/zthun/helpful/commit/665330654b8630e0b8152e9039226528e7a16db0))


### Bug Fixes

* last refresh is the source of truth ([3212729](https://github.com/zthun/helpful/commit/3212729e6c0d79ed51c46314214e490c461c519c))
* use original error if error is Error ([06107c6](https://github.com/zthun/helpful/commit/06107c63f3ee0f36e82ff4bd7837219be0f3ecd3))



## [0.16.2](https://github.com/zthun/helpful/compare/v0.16.1...v0.16.2) (2023-06-18)


### Bug Fixes

* static errors reject after the delay ([6e3336e](https://github.com/zthun/helpful/commit/6e3336e1510d2f58da3bb8f9d69cee8022fa6cea))



## [0.16.1](https://github.com/zthun/helpful/compare/v0.16.0...v0.16.1) (2023-06-18)

**Note:** Version bump only for package @zthun/helpful





## [0.16.0](https://github.com/zthun/helpful/compare/v0.15.1...v0.16.0) (2023-06-18)


### Features

* data source can now have an error state ([b00eecd](https://github.com/zthun/helpful/commit/b00eecdbf799aed3feae542c3cef5624c33fd363))



## [0.15.1](https://github.com/zthun/helpful/compare/v0.15.0...v0.15.1) (2023-06-14)


### Bug Fixes

* agender is not a material icon ([7f3a2ba](https://github.com/zthun/helpful/commit/7f3a2ba3f0df605a3d181bd05842814b5c343e12))
* split font awesome into correct families ([5e733cb](https://github.com/zthun/helpful/commit/5e733cbaf939ea6b6b706b5c3acbfb3b86ef3094))



## [0.15.0](https://github.com/zthun/helpful/compare/v0.14.2...v0.15.0) (2023-06-14)


### Features

* person now has a console preference ([d5c159e](https://github.com/zthun/helpful/commit/d5c159e6c811b972d8e93ffbac3c6d3ad653d8df))



## [0.14.2](https://github.com/zthun/helpful/compare/v0.14.1...v0.14.2) (2023-06-12)


### Bug Fixes

* ambassador state with initial now has a guarantee for the reducer value ([fee8298](https://github.com/zthun/helpful/commit/fee8298ce89f8cb6fc0d6dcefc3833f2a6e2909a))



## [0.14.1](https://github.com/zthun/helpful/compare/v0.14.0...v0.14.1) (2023-06-12)


### Bug Fixes

* return type of async state should now include the reducer ([d0fb77a](https://github.com/zthun/helpful/commit/d0fb77a4163c4680164ca8fbb4eab5fa855aec28))
* the ambassador state should now respect the reducer function ([9071eb3](https://github.com/zthun/helpful/commit/9071eb37236205474ac13d3509a51d06d2cc4d66))



## [0.14.0](https://github.com/zthun/helpful/compare/v0.13.0...v0.14.0) (2023-06-11)


### Features

* additional people metadata ([bf6d4e2](https://github.com/zthun/helpful/commit/bf6d4e23a2387038d65963e9b7f889d0a8db906b))
* people data source now supports options ([493136d](https://github.com/zthun/helpful/commit/493136df6b3fb27beb6d37a08e979a816cd3aff9))



## [0.13.0](https://github.com/zthun/helpful/compare/v0.12.0...v0.13.0) (2023-06-11)


### Features

* support fallbacks for asStateData ([ca77d75](https://github.com/zthun/helpful/commit/ca77d75a62b11593513a054d0fc510588e6c140c))



## [0.12.0](https://github.com/zthun/helpful/compare/v0.11.1...v0.12.0) (2023-06-10)


### Features

* added person information ([0a159da](https://github.com/zthun/helpful/commit/0a159dac5229b4a829e7b0772f88069e48c8cfd4))
* well known classes give icon classes for common features ([a1cfac4](https://github.com/zthun/helpful/commit/a1cfac4a8c28ebf61aca4c91ee5d7dc285b304b0))



## [0.11.1](https://github.com/zthun/helpful/compare/v0.11.0...v0.11.1) (2023-06-10)


### Bug Fixes

* paths for gender and sex ([8490a7f](https://github.com/zthun/helpful/commit/8490a7f3cf761d38fbfaf459fae6d860a4c4bfe2))



## [0.11.0](https://github.com/zthun/helpful/compare/v0.10.0...v0.11.0) (2023-06-10)


### Features

* single sort initial can now be undefined ([8895606](https://github.com/zthun/helpful/commit/8895606e1d69a9690e71b6bc12e17def9c29db42))
* sorter subjects can be undefined ([9a79ebb](https://github.com/zthun/helpful/commit/9a79ebb4ea08e4b2dc7c68c2d5cfe1f626f4d70c))
* the none sorter turns off sorting ([ea14053](https://github.com/zthun/helpful/commit/ea14053c0dab14d8ad1f6c8b9ac197052aa4cd09))



## [0.10.0](https://github.com/zthun/helpful/compare/v0.9.0...v0.10.0) (2023-06-10)


### Features

* added a sorter to perform a sort order algorithm when constructing sorts ([ffd784c](https://github.com/zthun/helpful/commit/ffd784c274bc5b6ddd9283ca3678c4bbf05da6ef))
* helpful people generates large amount of random data ([38c2a2f](https://github.com/zthun/helpful/commit/38c2a2ff09a868939cba9b58faf83fc48ce434ad))
* metadata describes information about the data ([e0321f5](https://github.com/zthun/helpful/commit/e0321f52656b2996f3924c83e9e1dfb6ad7677d6))



## [0.9.0](https://github.com/zthun/helpful/compare/v0.8.2...v0.9.0) (2023-05-15)


### Features

* brands exports all available brands in an array ([84e8a25](https://github.com/zthun/helpful/commit/84e8a25a63e5d865b4587b8878bdb1c59202e8e3))
* keyboard-activate hook helps with performing onclick events with the keyboard ([8c9b980](https://github.com/zthun/helpful/commit/8c9b9801386613783c5cc91bc5e6a531d8828585))


### Bug Fixes

* count on the static data source should now respect the delay ([accbbf1](https://github.com/zthun/helpful/commit/accbbf1d31bca9d54140cc175bac7e5223b69725))



## [0.8.2](https://github.com/zthun/helpful/compare/v0.8.1...v0.8.2) (2023-05-13)


### Bug Fixes

* useAsyncState should now set the state to loading when refreshed ([12763b3](https://github.com/zthun/helpful/commit/12763b31c00a4699c11642c0064f7301024a141a))



## [0.8.1](https://github.com/zthun/helpful/compare/v0.8.0...v0.8.1) (2023-05-13)


### Bug Fixes

* export the new options object ([811f6c1](https://github.com/zthun/helpful/commit/811f6c15e193bfc5cf42e452c9ccb738303145fc))



## [0.8.0](https://github.com/zthun/helpful/compare/v0.7.0...v0.8.0) (2023-05-13)


### Features

* added support for delays in the static source ([082d892](https://github.com/zthun/helpful/commit/082d892df54bb678339e8a535e542b257ebafe5e))



## [0.7.0](https://github.com/zthun/helpful/compare/v0.6.0...v0.7.0) (2023-05-13)


### Features

* count buckets calculates the number of buckets you would need to store x items ([d9fd9dc](https://github.com/zthun/helpful/commit/d9fd9dc9b8f1c85fc2ce745fe2ae618e699e6f75))



## [0.6.0](https://github.com/zthun/helpful/compare/v0.5.0...v0.6.0) (2023-05-13)


### Features

* helpful brands are useful for sample data for demos ([eb121c8](https://github.com/zthun/helpful/commit/eb121c881a8ea4dfde7b7461316c083f4f8535d9))



## [0.5.0](https://github.com/zthun/helpful/compare/v0.4.1...v0.5.0) (2023-04-23)


### Features

* added side anchor ([0e3bebc](https://github.com/zthun/helpful/commit/0e3bebc410db86be5d12f82b74e4dfb72f17863e))



## [0.4.1](https://github.com/zthun/helpful/compare/v0.4.0...v0.4.1) (2023-04-23)


### Bug Fixes

* export orientation and anchor ([3df0fd0](https://github.com/zthun/helpful/commit/3df0fd0e7bf405a0e865a541391ef8778f8bffaf))



## [0.4.0](https://github.com/zthun/helpful/compare/v0.3.0...v0.4.0) (2023-04-23)


### Features

* added an anchor enum ([ef0caf8](https://github.com/zthun/helpful/commit/ef0caf8af58aec4a91ccbe058ba35cc7245ea409))
* added an orientation enum ([b162132](https://github.com/zthun/helpful/commit/b162132ac975a5fd20b9adb982054d5acea5efa5))
* added helpful react for common hooks ([845e9a3](https://github.com/zthun/helpful/commit/845e9a3b0ee99161d0cd4002f240299efd0229e9))
* helpful react ([480330a](https://github.com/zthun/helpful/commit/480330aad6fba340862f53c801cf149d7f4ad660))



## [0.3.0](https://github.com/zthun/helpful/compare/v0.2.0...v0.3.0) (2023-02-28)


### Features

* added support to create GUIDs ([3d08fce](https://github.com/zthun/helpful/commit/3d08fce79ef53795c35bcd799d6750d81d9a8f03))



## [0.2.0](https://github.com/zthun/helpful/compare/v0.1.0...v0.2.0) (2023-02-24)


### Features

* binary filters allow for two way relationship comparisons ([6598141](https://github.com/zthun/helpful/commit/6598141eb4936088f81f54255084ac12859268e7))
* collection filters enable in/not-in queries ([9f1f129](https://github.com/zthun/helpful/commit/9f1f1293282e9b423c9e10b0c111c2e4a897f5c2))
* data filter fields applies a filter on object fields or the object itself ([87808c4](https://github.com/zthun/helpful/commit/87808c47589f206eba02e4d8d0f6de1d2d9d9408))
* data request defines the criteria for data retrieval ([2905cb0](https://github.com/zthun/helpful/commit/2905cb0f943e01b016def585afd5802840e5ee1e))
* data search is a match style which uses raw query strings as the filter criteria ([82908cd](https://github.com/zthun/helpful/commit/82908cddb3b9f761413db5020d32554431904364))
* data source async allows in-memory queries on async data ([a73190d](https://github.com/zthun/helpful/commit/a73190d0f5296598ab26293d689a4c7c7631c292))
* data source can do multi sort on data elements ([ce1d5eb](https://github.com/zthun/helpful/commit/ce1d5ebc7eb35fc4b7003d5e7e4e18383b4bf7b1))
* data source is the heart of the source pattern ([fcda4cc](https://github.com/zthun/helpful/commit/fcda4ccff049b3cccb521b6bc316c80d30008ec2))
* data source static allows in memory querying on a data array ([935a338](https://github.com/zthun/helpful/commit/935a338a01b707bb2afc11b6b182ab352e9ef964))
* each binary filter can map to comparators ([dbd9e4a](https://github.com/zthun/helpful/commit/dbd9e4ad4c0818869fbc326dedd2d50fcc9539c9))
* filters allow you to cull data down to a targeted set ([b82afc6](https://github.com/zthun/helpful/commit/b82afc64ddcb760bd7f21fc472b9fa7399d55864))
* logic filters allow for and/or clauses ([ac7d46e](https://github.com/zthun/helpful/commit/ac7d46ec83300c83b6511291896b7f2780d2139d))
* match describes how to match data against a custom defined filter ([5cf7b0c](https://github.com/zthun/helpful/commit/5cf7b0c28d12543bbb508836d6370356f5e97fda))
* sort lets you build a list of subject sorts in a specified order ([1777d99](https://github.com/zthun/helpful/commit/1777d99d9f270b1c849dc887ad6c04c435c6ff26))
* unary filters allow for null/non-null checks ([04a1c98](https://github.com/zthun/helpful/commit/04a1c98a07a0d09f8d8710fcfea4c11f40f1356d))



## 0.1.0 (2023-02-23)


### Features

* assert lets you build a list of assertions that must be true before continuing ([b22b665](https://github.com/zthun/helpful/commit/b22b6651e3f780bf87241fe529d358244cbadba1))
* first defined retrieves the first defined item in an array ([96a59f9](https://github.com/zthun/helpful/commit/96a59f92e255c85b81f790516603a2f6ce90793d))
* joinList joins non null values ([f83ad8a](https://github.com/zthun/helpful/commit/f83ad8ab21b694bd644147c0d687a8eaf9e38304))
* obligation adds required and optional to assert correct values ([ebff13d](https://github.com/zthun/helpful/commit/ebff13da42fffe12435464c081851ec8bec8d6c0))
* setFirst adds support for mapping a value to an initial item in an array ([43b51a0](https://github.com/zthun/helpful/commit/43b51a0b04faf26343eeeb19a872b96c8955a582))
* sleep is a basic set timeout that waits for a specific set of milliseconds ([ca28b70](https://github.com/zthun/helpful/commit/ca28b70ba8ad08b9e406f5f8523b5ed4fd2db6da))
