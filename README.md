![Version](https://img.shields.io/npm/v/%40jhae/stylelint-config-standard-scss?label=Version)
![License](https://img.shields.io/github/license/jhae-de/stylelint-config-standard-scss?label=License&color=lightgrey)
![Tests](https://img.shields.io/github/actions/workflow/status/jhae-de/stylelint-config-standard-scss/analyze.yaml?label=Tests)

# Standard SCSS Stylelint Config

This config extends
the [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss) shared config.

To see the rules that this config uses, please read the [config itself](/index.yaml).  
Basically, it just corrects the custom messages by adding the names of the rules to keep them consistent with all other
messages.

## Installation

```bash
npm install --save-dev @jhae/stylelint-config-standard-scss
```

## Usage

Create your `.stylelintrc.yaml` file with the following content:

```yaml
extends:
  - '@jhae/stylelint-config-standard-scss'
```

### Extending the config

Simply add a `rules` key to your config, then add your overrides and additions there.

For example, to turn off the `scss/dollar-variable-pattern` rule:

```yaml
extends:
  - '@jhae/stylelint-config-standard-scss'
rules:
  scss/dollar-variable-pattern: null
```
