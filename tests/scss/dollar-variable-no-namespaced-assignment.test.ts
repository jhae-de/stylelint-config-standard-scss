import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/dollar-variable-no-namespaced-assignment', {
  name: 'Allow assignment to namespaced variables',
  code: 'imported.$test: 1;',
});
