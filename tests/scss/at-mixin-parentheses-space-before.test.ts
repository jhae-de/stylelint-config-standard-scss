import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/at-mixin-parentheses-space-before', {
  name: 'Disallow a space before @mixin parentheses',
  code: '@mixin test ($arg) {}',
  expect: {
    errored: true,
    messages: ['Unexpected whitespace before parentheses in mixin declaration'],
    severities: ['error'],
  },
});
