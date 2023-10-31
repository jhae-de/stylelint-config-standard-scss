import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'font-weight-notation',
  {
    name: 'Require numeric font-weight values',
    code: 'test { font-weight: bold; }',
    expect: {
      errored: true,
      messages: ['Expected "bold" to be "700"'],
      severities: ['error'],
    },
  },
  {
    name: 'Require numeric font-weight values',
    code: 'test { font: italic normal 20px sans-serif; }',
    expect: {
      errored: true,
      messages: ['Expected "normal" to be "400"'],
      severities: ['error'],
    },
  },
  {
    name: 'Require numeric font-weight values',
    code: '@font-face { font-weight: normal bold; }',
    expect: {
      errored: true,
      messages: ['Expected "normal" to be "400"', 'Expected "bold" to be "700"'],
      severities: ['error', 'error'],
    },
  },
);
