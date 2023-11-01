import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/at-function-parentheses-space-before', {
  name: 'Disallow a space before @function parentheses',
  code: '@function test ($arg) {}',
  expect: {
    errored: true,
    messages: ['Unexpected whitespace before parentheses in function declaration'],
    severities: ['error'],
  },
});
