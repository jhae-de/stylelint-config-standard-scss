import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/dollar-variable-default', {
  name: 'Do not require !default flag for $-variable declarations',
  code: '$test: 1',
});
