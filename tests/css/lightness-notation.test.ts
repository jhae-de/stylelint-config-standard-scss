import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('lightness-notation', {
  name: 'Require percentage notation for lightness',
  code: `
    test { color: lab(0.5 0.5 128); }
    test { color: lab(50 0.5 128); }
  `,
  expect: {
    errored: true,
    messages: ['Expected "0.5" to be "0.5%"', 'Expected "50" to be "50%"'],
    severities: ['error', 'error'],
  },
});
