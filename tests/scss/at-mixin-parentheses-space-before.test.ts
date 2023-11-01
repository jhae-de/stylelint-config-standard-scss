import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/at-mixin-parentheses-space-before', {
  name: 'Disallow a space before @mixin parentheses',
  code: '@mixin test ($arg) {}',
  expect: {
    errored: true,
    messages: ['Unexpected whitespace before parentheses in mixin declaration'],
    severities: ['error'],
  },
});
