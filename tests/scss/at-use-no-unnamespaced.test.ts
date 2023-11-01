import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/at-use-no-unnamespaced', {
  name: 'Allow usage of @use without a namespace',
  code: '@use "foo" as *;',
});
