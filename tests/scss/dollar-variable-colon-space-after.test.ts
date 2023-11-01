import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/dollar-variable-colon-space-after', {
  name: 'Require a space after the colon if the $-variable value is single-line',
  code: '$test:1;',
  expect: {
    errored: true,
    messages: ['Expected single space after ":" with a single-line value'],
    severities: ['error'],
  },
});
