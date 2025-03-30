# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0) and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.0.0] - 2025-03-30

### Added

- `layer-name-pattern` rule

### Changed

- Bumped `stylelint` from `16.15.0` to `16.17.0`  
  Release notes:
  [16.16.0](https://github.com/stylelint/stylelint/releases/tag/16.16.0) |
  [16.17.0](https://github.com/stylelint/stylelint/releases/tag/16.17.0)

## [4.2.0] - 2025-03-02

### Changed

- `scss/at-rule-no-unknown` rule
  - Added the Tailwind CSS v4 directives to the ignored at-rules:
    - `@theme`
    - `@source`
    - `@utility`
    - `@variant`
    - `@custom-variant`
    - `@reference`
    - `@plugin`
  - Removed `@layer` from the ignored at-rules, as it is ignored by default.
- Bumped `stylelint` from `16.11.0` to `16.15.0`  
  Release notes:
  [16.12.0](https://github.com/stylelint/stylelint/releases/tag/16.12.0) |
  [16.13.0](https://github.com/stylelint/stylelint/releases/tag/16.13.0) |
  [16.13.1](https://github.com/stylelint/stylelint/releases/tag/16.13.1) |
  [16.13.2](https://github.com/stylelint/stylelint/releases/tag/16.13.2) |
  [16.14.0](https://github.com/stylelint/stylelint/releases/tag/16.14.0) |
  [16.14.1](https://github.com/stylelint/stylelint/releases/tag/16.14.1) |
  [16.15.0](https://github.com/stylelint/stylelint/releases/tag/16.15.0)
- Bumped `stylelint-scss` from `6.4.0` to `6.11.0`  
  Release notes:
  [6.4.1](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.4.1) |
  [6.5.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.5.0) |
  [6.5.1](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.5.1) |
  [6.6.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.6.0) |
  [6.7.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.7.0) |
  [6.8.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.8.0) |
  [6.8.1](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.8.1) |
  [6.9.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.9.0) |
  [6.10.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.10.0) |
  [6.10.1](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.10.1) |
  [6.11.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.11.0)

## [4.1.0] - 2024-12-08

### Changed

- `scss/at-rule-no-unknown` rule  
  Added Tailwind CSS directives to the ignored at-rules:
  - `@apply`
  - `@config`
  - `@layer`
  - `@responsive`
  - `@screen`
  - `@variants`
- Bumped `stylelint-config-standard-scss` from `13.1.0` to `14.0.0`  
  Release notes: [14.0.0](https://github.com/stylelint-scss/stylelint-config-standard-scss/releases/tag/v14.0.0)
- Bumped `stylelint` from `16.6.1` to `16.11.0`  
  Release notes:
  [16.7.0](https://github.com/stylelint/stylelint/releases/tag/16.7.0) |
  [16.8.0](https://github.com/stylelint/stylelint/releases/tag/16.8.0) |
  [16.8.1](https://github.com/stylelint/stylelint/releases/tag/16.8.1) |
  [16.8.2](https://github.com/stylelint/stylelint/releases/tag/16.8.2) |
  [16.9.0](https://github.com/stylelint/stylelint/releases/tag/16.9.0) |
  [16.10.0](https://github.com/stylelint/stylelint/releases/tag/16.10.0) |
  [16.11.0](https://github.com/stylelint/stylelint/releases/tag/16.11.0)
- Bumped `stylelint-scss` from `6.3.0` to `6.4.0`  
  Release notes:
  [6.3.1](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.3.1) |
  [6.3.2](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.3.2) |
  [6.4.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.4.0)

## [4.0.0] - 2024-11-24

### Changed

- Set minimum required `stylelint` version to `16.6.1`
- Set minimum required `stylelint-scss` version to `6.3.0`

### Removed

- `at-rule-empty-line-before` rule  
  This rule has been removed in favor of its definition in the `stylelint-config-standard-scss` configuration.

## [3.2.1] - 2024-10-10

### Changed

- Added missing required dependencies

## [3.2.0] - 2024-09-24

### Changed

- `scss/at-rule-no-unknown` rule  
  Added `@tailwind` to the ignored at-rules.
- Bumped `stylelint-scss` from `6.5.0` to `6.7.0`  
  Release notes:
  [6.5.1](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.5.1) |
  [6.6.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.6.0) |
  [6.7.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.7.0)

## [3.1.0] - 2024-08-18

### Changed

- Bumped `stylelint-scss` from `6.4.1` to `6.5.0`  
  Release notes: [6.5.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.5.0)

## [3.0.0] - 2024-07-14

With this release, all rules that overwrite one of the parent configurations are moved to
the [stylelint-config-strict-scss](https://github.com/jhae-de/stylelint-config-strict-scss) shared config.

### Changed

- Bumped `stylelint-scss` from `6.3.1` to `6.4.1`  
  Release notes:
  [6.3.2](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.3.2) |
  [6.4.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.4.0) |
  [6.4.1](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.4.1)

### Removed

- `scss/at-mixin-no-risky-nesting-selector` rule
- `scss/at-root-no-redundant` rule
- `scss/no-unused-private-members` rule

## [2.1.0] - 2024-06-18

### Added

- `scss/at-mixin-no-risky-nesting-selector` rule
- `scss/at-root-no-redundant` rule
- `scss/no-unused-private-members` rule

### Changed

- Bumped `stylelint-config-standard-scss` from `11.1.0` to `13.1.0`  
  Release notes:
  [12.0.0](https://github.com/stylelint-scss/stylelint-config-standard-scss/releases/tag/v12.0.0) |
  [13.0.0](https://github.com/stylelint-scss/stylelint-config-standard-scss/releases/tag/v13.0.0) |
  [13.1.0](https://github.com/stylelint-scss/stylelint-config-standard-scss/releases/tag/v13.1.0)
- Bumped `stylelint-scss` from `5.3.0` to `6.3.1`  
  Release notes:
  [5.3.1](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v5.3.1) |
  [5.3.2](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v5.3.2) |
  [6.0.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.0.0) |
  [6.1.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.1.0) |
  [6.2.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.2.0) |
  [6.2.1](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.2.1) |
  [6.3.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.3.0) |
  [6.3.1](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.3.1)

## [2.0.0] - 2023-11-04

With this release, all rules that overwrite one of the parent configurations are moved to
the [stylelint-config-strict-scss](https://github.com/jhae-de/stylelint-config-strict-scss) shared config.

### Removed

- `at-rule-disallowed-list` rule
- `color-hex-length` rule
- `color-named` rule
- `declaration-block-no-duplicate-properties` rule
- `font-weight-notation` rule
- `property-no-unknown` rule
- `rule-empty-line-before` rule
- `selector-max-id` rule
- `scss/at-each-key-value-single-line` rule
- `scss/at-function-named-arguments` rule
- `scss/at-mixin-argumentless-call-parentheses` rule
- `scss/at-mixin-named-arguments` rule
- `scss/block-no-redundant-nesting` rule
- `scss/dimension-no-non-numeric-values` rule
- `scss/dollar-variable-colon-newline-after` rule
- `scss/dollar-variable-colon-space-after` rule
- `scss/function-calculation-no-interpolation` rule
- `scss/load-no-partial-leading-underscore` rule
- `scss/property-no-unknown` rule

## [1.2.0] - 2023-11-03

### Added

- `color-named` rule
- `declaration-block-no-duplicate-properties` rule
- `font-weight-notation` rule
- `selector-max-id` rule
- `scss/block-no-redundant-nesting` rule
- `scss/dollar-variable-colon-newline-after` rule
- `scss/dollar-variable-colon-space-after` rule
- `scss/function-calculation-no-interpolation` rule
- `scss/load-no-partial-leading-underscore` rule
- `scss/property-no-unknown` rule

### Changed

- `at-rule-empty-line-before` rule  
  Replaced `blockless-after-blockless` with `blockless-after-same-name-blockless`
- `rule-empty-line-before` rule  
  Replaced `always-multi-line` with `always`
- `property-no-unknown` rule  
  Disabled the rule in favor of the `scss/property-no-unknown` rule

### Fixed

- Added the rule name to the custom messages of
  - `custom-media-pattern` rule
  - `custom-property-pattern` rule
  - `keyframes-name-pattern` rule
  - `selector-class-pattern` rule
  - `selector-id-pattern` rule
  - `scss/at-function-pattern` rule
  - `scss/at-mixin-pattern` rule
  - `scss/dollar-variable-pattern` rule
  - `scss/percent-placeholder-pattern` rule

## [1.1.0] - 2023-10-23

### Removed

The following rules have been removed as they are already part of one of the extended configurations.

- `scss/at-extend-no-missing-placeholder` rule
- `scss/comment-no-empty` rule
- `scss/function-quote-no-quoted-strings-inside` rule
- `scss/function-unquote-no-unquoted-strings-inside` rule
- `scss/no-global-function-names` rule

## [1.0.0] - 2023-10-22

Initial release

### Added

- `at-rule-disallowed-list` rule
- `color-hex-length` rule
- `scss/at-each-key-value-single-line` rule
- `scss/at-extend-no-missing-placeholder` rule
- `scss/at-function-named-arguments` rule
- `scss/at-mixin-argumentless-call-parentheses` rule
- `scss/at-mixin-named-arguments` rule
- `scss/comment-no-empty` rule
- `scss/dimension-no-non-numeric-values` rule
- `scss/function-quote-no-quoted-strings-inside` rule
- `scss/function-unquote-no-unquoted-strings-inside` rule
- `scss/no-global-function-names` rule

[Unreleased]: https://github.com/jhae-de/stylelint-config-standard-scss/compare/v5.0.0...main
[5.0.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v5.0.0
[4.2.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v4.2.0
[4.1.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v4.1.0
[4.0.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v4.0.0
[3.2.1]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v3.2.1
[3.2.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v3.2.0
[3.1.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v3.1.0
[3.0.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v3.0.0
[2.1.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v2.1.0
[2.0.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v2.0.0
[1.2.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v1.2.0
[1.1.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v1.1.0
[1.0.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v1.0.0
