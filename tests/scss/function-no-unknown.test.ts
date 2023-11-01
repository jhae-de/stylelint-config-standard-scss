import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/function-no-unknown', {
  name: 'Allow unknown functions',
  code: 'test { transform: unknown(1); }',
});
