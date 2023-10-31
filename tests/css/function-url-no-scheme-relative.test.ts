import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('function-url-no-scheme-relative', {
  name: 'Allow scheme-relative urls',
  code: 'test { background: url("//example.com/file.test"); }',
});
