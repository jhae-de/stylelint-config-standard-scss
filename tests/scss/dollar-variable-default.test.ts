import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/dollar-variable-default', {
  name: 'Do not require !default flag for $-variable declarations',
  code: '$test: 1',
});
