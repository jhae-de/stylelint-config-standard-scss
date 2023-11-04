import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/dimension-no-non-numeric-values', {
  name: 'Ignore non-numeric values when interpolating a value with a unit',
  code: 'test { padding: #{test}px; }',
});
