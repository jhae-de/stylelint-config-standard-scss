import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/dollar-variable-colon-newline-after', {
  name: 'Require a newline after the colon if the $-variable value is multi-line',
  code: `
    $box-shadow: 0 0 0 1px #000000,
      0 0 2px 1px rgba(255, 255, 255, 0.5);
  `,
  expect: {
    errored: true,
    messages: ['Expected newline after ":" with a multi-line value'],
    severities: ['error'],
  },
});
