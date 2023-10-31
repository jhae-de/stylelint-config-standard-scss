import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

// This rule is disabled in the stylelint-config-recommended-scss config in favor of scss/at-rule-no-unknown, so
// unknown at-rules should be allowed.

RuleTest.describe('at-rule-no-unknown', {
  name: 'Allow unknown at-rules',
  code: '@unknown {}',
});
