import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('selector-pseudo-element-colon-notation', {
  name: 'Require double colon notation for applicable pseudo-element selectors',
  code: 'div:before { color: black; }',
  expect: {
    errored: true,
    messages: ['Expected double colon pseudo-element notation'],
    severities: ['error'],
  },
});
