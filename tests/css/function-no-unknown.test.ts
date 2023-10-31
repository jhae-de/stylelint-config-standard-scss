import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

// This rule is disabled in the stylelint-config-recommended-scss config.

RuleTest.describe('function-no-unknown', {
  name: 'Allow unknown functions',
  code: 'test { transform: unknown(1); }',
});
