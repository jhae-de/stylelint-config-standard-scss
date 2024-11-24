import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/at-function-parentheses-space-before', {
  name: 'Disallow a space before @function parentheses',
  code: '@function test ($arg) {}',
  expect: {
    errored: true,
    messages: ['Unexpected whitespace before parentheses in function declaration'],
    severities: ['error'],
  },
});
