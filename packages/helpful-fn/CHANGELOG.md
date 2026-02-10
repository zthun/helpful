# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## <small>9.11.10 (2026-02-10)</small>

* fix: interface, IZEnumInformation is now IZEnumInfo to match the builder name ([2b8b23b](https://github.com/zthun/helpful/commit/2b8b23b))





## <small>9.11.9 (2026-02-10)</small>

* fix: enums can only be strings or numbers ([201e808](https://github.com/zthun/helpful/commit/201e808))





## <small>9.11.8 (2026-02-10)</small>

* feat: enum info describes generic information about an enum value ([3e3413f](https://github.com/zthun/helpful/commit/3e3413f))





## <small>9.11.7 (2026-02-09)</small>

* feat: cast enum tries to cast a value to an enum value set ([dc7e0ff](https://github.com/zthun/helpful/commit/dc7e0ff))
* feat: cast number tries to cast a candidate to a number and falls back if it is not possible ([c904270](https://github.com/zthun/helpful/commit/c904270))
* feat: is enum determines if a candidate value can represent an object value enumeration ([6b97947](https://github.com/zthun/helpful/commit/6b97947))
* test: we have enums already ([ead6e98](https://github.com/zthun/helpful/commit/ead6e98))
* fix: enum, CalendarMonth is now properly named ZCalendarMonth ([89ffeee](https://github.com/zthun/helpful/commit/89ffeee))
* refactor: declare calendar month as enum ([e9cd700](https://github.com/zthun/helpful/commit/e9cd700))





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





## <small>9.11.5 (2026-02-01)</small>

* feat: try json parse allows you to attempt to parse json and return a fallback ([689505e](https://github.com/zthun/helpful/commit/689505e))
* refactor: move to more generic try directory ([1ffe3e7](https://github.com/zthun/helpful/commit/1ffe3e7))





## <small>9.11.4 (2026-01-31)</small>

* build: update outdated packages ([a29a3bf](https://github.com/zthun/helpful/commit/a29a3bf))





## [9.11.2](https://github.com/zthun/helpful/compare/v9.11.1...v9.11.2) (2026-01-02)

**Note:** Version bump only for package @zthun/helpful-fn





## [9.11.1](https://github.com/zthun/helpful/compare/v9.11.0...v9.11.1) (2025-12-14)

**Note:** Version bump only for package @zthun/helpful-fn





## [9.11.0](https://github.com/zthun/helpful/compare/v9.10.1...v9.11.0) (2025-10-30)


### Features

* pickEvents picks all properties that start with the text, on ([40e6b66](https://github.com/zthun/helpful/commit/40e6b6616d570b129e727915128ac88d349d1793))



## [9.10.1](https://github.com/zthun/helpful/compare/v9.10.0...v9.10.1) (2025-10-29)

**Note:** Version bump only for package @zthun/helpful-fn





## [9.10.0](https://github.com/zthun/helpful/compare/v9.9.0...v9.10.0) (2025-10-25)


### Features

* cast extension will take a string and make sure it's a proper extension format ([638a1a8](https://github.com/zthun/helpful/commit/638a1a8885791b024de749519149408e512502bc))



## [9.9.0](https://github.com/zthun/helpful/compare/v9.8.0...v9.9.0) (2025-10-24)


### Features

* mutable types remove the readonly flags for builder mutations ([bdbd1ba](https://github.com/zthun/helpful/commit/bdbd1ba58a7d0be82d824c311dd2c4de427157e9))



## [9.8.0](https://github.com/zthun/helpful/compare/v9.7.1...v9.8.0) (2025-10-23)


### Features

* added file size to byte helper functions ([3d386f7](https://github.com/zthun/helpful/commit/3d386f7b87ffb601cfda771e21a641c72de8add5))
* number like describe types that can represent numbers ([3883e87](https://github.com/zthun/helpful/commit/3883e8747d52c1046bd9c5c3fad2d870b5849f37))



## [9.6.0](https://github.com/zthun/helpful/compare/v9.5.1...v9.6.0) (2025-10-14)

**Note:** Version bump only for package @zthun/helpful-fn





## [9.4.5](https://github.com/zthun/helpful/compare/v9.4.4...v9.4.5) (2025-10-04)

**Note:** Version bump only for package @zthun/helpful-fn





## [9.4.4](https://github.com/zthun/helpful/compare/v9.4.3...v9.4.4) (2025-09-09)

**Note:** Version bump only for package @zthun/helpful-fn





## [9.4.3](https://github.com/zthun/helpful/compare/v9.4.2...v9.4.3) (2025-09-06)

**Note:** Version bump only for package @zthun/helpful-fn





## [9.4.2](https://github.com/zthun/helpful/compare/v9.4.1...v9.4.2) (2025-07-18)

**Note:** Version bump only for package @zthun/helpful-fn





## [9.4.0](https://github.com/zthun/helpful/compare/v9.3.0...v9.4.0) (2025-06-21)


### Features

* detokenize allows you to replace interpolation token values in a string ([969808d](https://github.com/zthun/helpful/commit/969808dbb72c4763ed8d272792d4069a152e68bb))
* nullable and optional types make it quick to declare or null or undefined ([b685927](https://github.com/zthun/helpful/commit/b685927a737232926198f27141f6c762095bf5e7))



## [9.3.0](https://github.com/zthun/helpful/compare/v9.2.0...v9.3.0) (2025-06-20)

**Note:** Version bump only for package @zthun/helpful-fn





## [9.1.0](https://github.com/zthun/helpful/compare/v9.0.0...v9.1.0) (2025-06-17)

**Note:** Version bump only for package @zthun/helpful-fn





## [9.0.0](https://github.com/zthun/helpful/compare/v8.0.0...v9.0.0) (2025-06-17)

**Note:** Version bump only for package @zthun/helpful-fn





## [8.0.0](https://github.com/zthun/helpful/compare/v7.2.1...v8.0.0) (2025-06-10)


### ⚠ BREAKING CHANGES

* build now uses node next module resolution

### Build System

* build now uses node next module resolution ([2129477](https://github.com/zthun/helpful/commit/2129477b1288402b91f2a1f5c4bd583e5eaeb620))



## [7.2.1](https://github.com/zthun/helpful/compare/v7.2.0...v7.2.1) (2025-05-23)

**Note:** Version bump only for package @zthun/helpful-fn





## [7.2.0](https://github.com/zthun/helpful/compare/v7.1.0...v7.2.0) (2025-01-05)


### Features

* added a lazy class for lazy instantiation of values ([e0425ce](https://github.com/zthun/helpful/commit/e0425cedbb61f1914a89cb867f0d1618a11ea537))
* added types for suppliers ([dbe8bca](https://github.com/zthun/helpful/commit/dbe8bca97face33e2fc05df68e90bc1c85a71f71))



## [7.1.0](https://github.com/zthun/helpful/compare/v7.0.5...v7.1.0) (2025-01-05)


### Features

* purge removes properties if they are undefined ([0aa71bb](https://github.com/zthun/helpful/commit/0aa71bb95470042aff4ba54b9670188ca71a6137))



## [7.0.5](https://github.com/zthun/helpful/compare/v7.0.4...v7.0.5) (2025-01-03)

**Note:** Version bump only for package @zthun/helpful-fn





## [7.0.4](https://github.com/zthun/helpful/compare/v7.0.2...v7.0.4) (2025-01-03)

**Note:** Version bump only for package @zthun/helpful-fn





## [7.0.2](https://github.com/zthun/helpful/compare/v7.0.1...v7.0.2) (2025-01-03)

**Note:** Version bump only for package @zthun/helpful-fn





## [7.0.1](https://github.com/zthun/helpful/compare/v7.0.0...v7.0.1) (2025-01-03)

**Note:** Version bump only for package @zthun/helpful-fn





## [7.0.0](https://github.com/zthun/helpful/compare/v6.7.2...v7.0.0) (2025-01-03)

**Note:** Version bump only for package @zthun/helpful-fn





## [6.7.0](https://github.com/zthun/helpful/compare/v6.6.0...v6.7.0) (2024-12-29)

**Note:** Version bump only for package @zthun/helpful-fn





## [6.6.0](https://github.com/zthun/helpful/compare/v6.5.2...v6.6.0) (2024-11-19)


### Features

* deep partial describes a recursive partial ([06ac8aa](https://github.com/zthun/helpful/commit/06ac8aa04e9a8d3b3b23ba6b3e8b2b10ef1cea47))



## [6.5.2](https://github.com/zthun/helpful/compare/v6.5.1...v6.5.2) (2024-11-05)

**Note:** Version bump only for package @zthun/helpful-fn





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

**Note:** Version bump only for package @zthun/helpful-fn





## [5.0.3](https://github.com/zthun/helpful/compare/v5.0.2...v5.0.3) (2024-07-15)

**Note:** Version bump only for package @zthun/helpful-fn





## [5.0.2](https://github.com/zthun/helpful/compare/v5.0.1...v5.0.2) (2024-07-06)

**Note:** Version bump only for package @zthun/helpful-fn





## [5.0.1](https://github.com/zthun/helpful/compare/v5.0.0...v5.0.1) (2024-04-21)

**Note:** Version bump only for package @zthun/helpful-fn





## [5.0.0](https://github.com/zthun/helpful/compare/v4.1.2...v5.0.0) (2024-04-11)


### ⚠ BREAKING CHANGES

* trilean has been removed

### Features

* trilean has been removed ([629db7a](https://github.com/zthun/helpful/commit/629db7a7deb8ab0fc832a6143b904613cac0911c))



## [4.1.1](https://github.com/zthun/helpful/compare/v4.1.0...v4.1.1) (2024-04-09)

**Note:** Version bump only for package @zthun/helpful-fn





## [4.1.0](https://github.com/zthun/helpful/compare/v4.0.4...v4.1.0) (2024-04-02)


### Features

* added shell tags ([2fb7bd6](https://github.com/zthun/helpful/commit/2fb7bd67d52b177c00d5d6b13877866ccfc69886))



## [4.0.4](https://github.com/zthun/helpful/compare/v4.0.3...v4.0.4) (2024-03-29)

**Note:** Version bump only for package @zthun/helpful-fn





## [4.0.3](https://github.com/zthun/helpful/compare/v4.0.2...v4.0.3) (2024-03-29)

**Note:** Version bump only for package @zthun/helpful-fn





## [4.0.2](https://github.com/zthun/helpful/compare/v4.0.1...v4.0.2) (2024-03-29)

**Note:** Version bump only for package @zthun/helpful-fn





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

**Note:** Version bump only for package @zthun/helpful-fn





## [3.16.0](https://github.com/zthun/helpful/compare/v3.15.1...v3.16.0) (2024-03-09)


### Features

* added support for trilean types ([2b4f0f9](https://github.com/zthun/helpful/commit/2b4f0f99307cf36a51b09ba45d931c22526c60bb))
* trilean type is now a part of an intrinsic type ([671132f](https://github.com/zthun/helpful/commit/671132f87dec1f5f351480831cc3e433c865d3e2))



## [3.15.0](https://github.com/zthun/helpful/compare/v3.14.0...v3.15.0) (2024-03-08)

**Note:** Version bump only for package @zthun/helpful-fn





## [3.13.0](https://github.com/zthun/helpful/compare/v3.12.2...v3.13.0) (2024-03-02)


### Features

* firstDefined has been expanded to firstWhere and firstTruthy ([0b4a648](https://github.com/zthun/helpful/commit/0b4a6489db738783b68038f9d4a85e4df0babda0))



## [3.12.2](https://github.com/zthun/helpful/compare/v3.12.1...v3.12.2) (2024-03-01)

**Note:** Version bump only for package @zthun/helpful-fn





## [3.12.0](https://github.com/zthun/helpful/compare/v3.11.1...v3.12.0) (2024-03-01)

**Note:** Version bump only for package @zthun/helpful-fn





## [3.11.1](https://github.com/zthun/helpful/compare/v3.11.0...v3.11.1) (2024-03-01)

**Note:** Version bump only for package @zthun/helpful-fn





## [3.11.0](https://github.com/zthun/helpful/compare/v3.10.1...v3.11.0) (2024-03-01)


### Features

* tag allows for IDE highlighting hints for template strings ([e995f7d](https://github.com/zthun/helpful/commit/e995f7de979bffc3902a7cd4d3d06a48e36b2f2a))



## [3.10.0](https://github.com/zthun/helpful/compare/v3.9.0...v3.10.0) (2024-02-25)


### Features

* schema allows defining metadata for an object ([1432df9](https://github.com/zthun/helpful/commit/1432df9e8b4da12735fcb91f655a7574ebc9faa2))



## [3.9.0](https://github.com/zthun/helpful/compare/v3.8.0...v3.9.0) (2024-02-21)

**Note:** Version bump only for package @zthun/helpful-fn





## [3.8.0](https://github.com/zthun/helpful/compare/v3.7.3...v3.8.0) (2024-02-20)

**Note:** Version bump only for package @zthun/helpful-fn





## [3.6.0](https://github.com/zthun/helpful/compare/v3.5.0...v3.6.0) (2024-02-19)


### Features

* added helpful geometry objects ([28a8913](https://github.com/zthun/helpful/commit/28a8913efa69b82be38fcc9555fec69ae2cc34d6))



## [3.5.0](https://github.com/zthun/helpful/compare/v3.4.0...v3.5.0) (2024-02-16)

**Note:** Version bump only for package @zthun/helpful-fn





## [3.4.0](https://github.com/zthun/helpful/compare/v3.3.1...v3.4.0) (2024-02-15)


### Features

* $global returns the globalThis object ([3674d8f](https://github.com/zthun/helpful/commit/3674d8f02d4cc861857da2f54b6c7106e1e8e17d))



## [3.3.0](https://github.com/zthun/helpful/compare/v3.2.1...v3.3.0) (2024-02-09)


### Features

* added serializer and deserializer interfaces ([ee66a02](https://github.com/zthun/helpful/commit/ee66a024a8e2eee1b0c2bc78054379bf6f44a6da))
* deserialize-json enables schema based json deserialization ([5fb775c](https://github.com/zthun/helpful/commit/5fb775c819611a71f15b90dd17b21460b7a837a8))
* deserialize-try allows for composite deserialization ([2e2b2d0](https://github.com/zthun/helpful/commit/2e2b2d04e7ff160e56b1aa06fe9d71c654d87685))
* serialize json enables pretty printing a json object ([6b277bc](https://github.com/zthun/helpful/commit/6b277bc228554f177514ebfcff2d8acc620c2593))



## [3.2.0](https://github.com/zthun/helpful/compare/v3.1.0...v3.2.0) (2024-01-15)


### Features

* peel allows to split strings based on token rules ([9926a5e](https://github.com/zthun/helpful/commit/9926a5eea8c9f058a76126927bd12296d9ee62c2))
* try fallback let's you try a function and then recover with a fallback value ([799e304](https://github.com/zthun/helpful/commit/799e3040dd3553a2069ca65c239340dc11112e1c))



## [3.0.0](https://github.com/zthun/helpful/compare/v2.7.1...v3.0.0) (2023-11-24)


### ⚠ BREAKING CHANGES

* helpful-obligation has been merged into helpful-fn

### Features

* helpful-obligation has been merged into helpful-fn ([656b4f2](https://github.com/zthun/helpful/commit/656b4f295ecbe0fcb747cd1fe000782cca79c00d))



## [2.4.0](https://github.com/zthun/helpful/compare/v2.3.0...v2.4.0) (2023-11-11)

**Note:** Version bump only for package @zthun/helpful-fn





## [2.3.0](https://github.com/zthun/helpful/compare/v2.2.1...v2.3.0) (2023-09-02)

**Note:** Version bump only for package @zthun/helpful-fn





## [2.2.1](https://github.com/zthun/helpful/compare/v2.2.0...v2.2.1) (2023-08-19)


### Bug Fixes

* create error should now respect data as well ([bbc7ae5](https://github.com/zthun/helpful/commit/bbc7ae5f9664cb6cb8234f1e452e5993ebf41a84))



## [2.2.0](https://github.com/zthun/helpful/compare/v2.1.0...v2.2.0) (2023-08-19)


### Features

* create-error extracts error information from objects ([357d95a](https://github.com/zthun/helpful/commit/357d95a761c7fac8b01de47446a7b398c2c9503b))



## [2.1.0](https://github.com/zthun/helpful/compare/v2.0.0...v2.1.0) (2023-08-17)

**Note:** Version bump only for package @zthun/helpful-fn





## [2.0.0](https://github.com/zthun/helpful/compare/v0.21.6...v2.0.0) (2023-08-15)


### ⚠ BREAKING CHANGES

* stable release

### Features

* stable release ([cd0a160](https://github.com/zthun/helpful/commit/cd0a160385a131e2c8fc5bebe9a7e4ff25e00abf))



## [0.21.6](https://github.com/zthun/helpful/compare/v0.21.5...v0.21.6) (2023-08-15)


### Bug Fixes

* should no longer bundle uuid ([abcae97](https://github.com/zthun/helpful/commit/abcae97ab85b8096b5159020ffe635686bde49f0))



## [0.21.5](https://github.com/zthun/helpful/compare/v0.21.4...v0.21.5) (2023-08-12)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.21.4](https://github.com/zthun/helpful/compare/v0.21.3...v0.21.4) (2023-08-12)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.21.3](https://github.com/zthun/helpful/compare/v0.21.2...v0.21.3) (2023-08-12)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.21.2](https://github.com/zthun/helpful/compare/v0.21.1...v0.21.2) (2023-08-12)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.21.1](https://github.com/zthun/helpful/compare/v0.21.0...v0.21.1) (2023-08-12)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.21.0](https://github.com/zthun/helpful/compare/v0.20.1...v0.21.0) (2023-08-12)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.20.1](https://github.com/zthun/helpful/compare/v0.20.0...v0.20.1) (2023-07-26)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.20.0](https://github.com/zthun/helpful/compare/v0.19.0...v0.20.0) (2023-07-25)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.19.0](https://github.com/zthun/helpful/compare/v0.18.0...v0.19.0) (2023-07-25)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.18.0](https://github.com/zthun/helpful/compare/v0.17.1...v0.18.0) (2023-07-15)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.17.1](https://github.com/zthun/helpful/compare/v0.17.0...v0.17.1) (2023-07-15)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.17.0](https://github.com/zthun/helpful/compare/v0.16.2...v0.17.0) (2023-06-19)


### Features

* sleep can resolve with a value ([6653306](https://github.com/zthun/helpful/commit/665330654b8630e0b8152e9039226528e7a16db0))



## [0.16.2](https://github.com/zthun/helpful/compare/v0.16.1...v0.16.2) (2023-06-18)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.16.1](https://github.com/zthun/helpful/compare/v0.16.0...v0.16.1) (2023-06-18)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.16.0](https://github.com/zthun/helpful/compare/v0.15.1...v0.16.0) (2023-06-18)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.15.1](https://github.com/zthun/helpful/compare/v0.15.0...v0.15.1) (2023-06-14)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.15.0](https://github.com/zthun/helpful/compare/v0.14.2...v0.15.0) (2023-06-14)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.14.2](https://github.com/zthun/helpful/compare/v0.14.1...v0.14.2) (2023-06-12)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.14.1](https://github.com/zthun/helpful/compare/v0.14.0...v0.14.1) (2023-06-12)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.14.0](https://github.com/zthun/helpful/compare/v0.13.0...v0.14.0) (2023-06-11)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.13.0](https://github.com/zthun/helpful/compare/v0.12.0...v0.13.0) (2023-06-11)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.12.0](https://github.com/zthun/helpful/compare/v0.11.1...v0.12.0) (2023-06-10)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.11.1](https://github.com/zthun/helpful/compare/v0.11.0...v0.11.1) (2023-06-10)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.11.0](https://github.com/zthun/helpful/compare/v0.10.0...v0.11.0) (2023-06-10)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.10.0](https://github.com/zthun/helpful/compare/v0.9.0...v0.10.0) (2023-06-10)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.9.0](https://github.com/zthun/helpful/compare/v0.8.2...v0.9.0) (2023-05-15)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.8.2](https://github.com/zthun/helpful/compare/v0.8.1...v0.8.2) (2023-05-13)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.8.1](https://github.com/zthun/helpful/compare/v0.8.0...v0.8.1) (2023-05-13)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.8.0](https://github.com/zthun/helpful/compare/v0.7.0...v0.8.0) (2023-05-13)

**Note:** Version bump only for package @zthun/helpful-fn





## [0.7.0](https://github.com/zthun/helpful/compare/v0.6.0...v0.7.0) (2023-05-13)


### Features

* count buckets calculates the number of buckets you would need to store x items ([d9fd9dc](https://github.com/zthun/helpful/commit/d9fd9dc9b8f1c85fc2ce745fe2ae618e699e6f75))



## [0.6.0](https://github.com/zthun/helpful/compare/v0.5.0...v0.6.0) (2023-05-13)

**Note:** Version bump only for package @zthun/helpful-fn





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



## [0.3.0](https://github.com/zthun/helpful/compare/v0.2.0...v0.3.0) (2023-02-28)


### Features

* added support to create GUIDs ([3d08fce](https://github.com/zthun/helpful/commit/3d08fce79ef53795c35bcd799d6750d81d9a8f03))



## [0.2.0](https://github.com/zthun/helpful/compare/v0.1.0...v0.2.0) (2023-02-24)

**Note:** Version bump only for package @zthun/helpful-fn





## 0.1.0 (2023-02-23)


### Features

* first defined retrieves the first defined item in an array ([96a59f9](https://github.com/zthun/helpful/commit/96a59f92e255c85b81f790516603a2f6ce90793d))
* setFirst adds support for mapping a value to an initial item in an array ([43b51a0](https://github.com/zthun/helpful/commit/43b51a0b04faf26343eeeb19a872b96c8955a582))
* sleep is a basic set timeout that waits for a specific set of milliseconds ([ca28b70](https://github.com/zthun/helpful/commit/ca28b70ba8ad08b9e406f5f8523b5ed4fd2db6da))
