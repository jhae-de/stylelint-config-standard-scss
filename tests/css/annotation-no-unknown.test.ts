import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

// This rule is disabled in the stylelint-config-recommended-scss config.

RuleTest.describe('annotation-no-unknown', {
  name: 'Allow unknown annotations',
  code: 'test { color: black !imprtant; }',
});
