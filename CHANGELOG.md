# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0) and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.0] - 2024-07-14

### Changed

- Updated dependencies
  - `stylelint-scss@6.4.1`

### Removed

- `scss/at-mixin-no-risky-nesting-selector` rule
- `scss/at-root-no-redundant` rule
- `scss/no-unused-private-members` rule

## [2.1.0] - 2024-06-18

### Changed

- Updated dependencies
  - `stylelint-config-standard-scss@13.1.0`
  - `stylelint-scss@6.3.1`

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

- `stylelint-scss` dependency
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

- Updated dependencies
  - `@types/jest`
  - `@typescript-eslint/eslint-plugin`
  - `@typescript-eslint/parser`
- `at-rule-empty-line-before` rule
  - Replaced `blockless-after-blockless` with `blockless-after-same-name-blockless`
- `rule-empty-line-before` rule
  - Replaced `always-multi-line` with `always`
- `property-no-unknown` rule
  - Disabled rule in favor of `scss/property-no-unknown` rule

### Fixed

- Added rule name to custom messages of
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

- scss/at-extend-no-missing-placeholder
- scss/comment-no-empty
- scss/function-quote-no-quoted-strings-inside
- scss/function-unquote-no-unquoted-strings-inside
- scss/no-global-function-names

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

[Unreleased]: https://github.com/jhae-de/stylelint-config-standard-scss/compare/v2.1.0...main
[2.1.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v2.1.0
[2.0.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v2.0.0
[1.2.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v1.2.0
[1.1.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v1.1.0
[1.0.0]: https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v1.0.0
