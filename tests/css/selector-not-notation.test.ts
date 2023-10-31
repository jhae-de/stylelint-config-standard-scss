import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('selector-not-notation', {
  name: 'Require complex notation for :not() pseudo-class selectors',
  code: ':not(a):not(b) {}',
  expect: {
    errored: true,
    messages: ['Expected complex :not() pseudo-class notation'],
    severities: ['error'],
  },
});
