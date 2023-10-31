import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('selector-pseudo-class-no-unknown', {
  name: 'Disallow unknown pseudo-class selectors',
  code: `
    div:unknown {}
    div:UNKNOWN {}
    a:hoverr {}
  `,
  expect: {
    errored: true,
    messages: [
      'Unexpected unknown pseudo-class selector ":unknown"',
      'Unexpected unknown pseudo-class selector ":UNKNOWN"',
      'Unexpected unknown pseudo-class selector ":hoverr"',
    ],
    severities: ['error', 'error', 'error'],
  },
});
