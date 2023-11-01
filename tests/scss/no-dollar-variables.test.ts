import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/no-dollar-variables', {
  name: 'Allow dollar variables within a stylesheet',
  code: '$test: 1;',
});
