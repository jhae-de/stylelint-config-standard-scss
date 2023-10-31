import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('selector-pseudo-element-no-unknown', {
  name: 'Disallow unknown pseudo-element selectors',
  code: `
    div::pseudo {}
    div::PSEUDO {}
    div::element {}
  `,
  expect: {
    errored: true,
    messages: [
      'Unexpected unknown pseudo-element selector "::pseudo"',
      'Unexpected unknown pseudo-element selector "::PSEUDO"',
      'Unexpected unknown pseudo-element selector "::element"',
    ],
    severities: ['error', 'error', 'error'],
  },
});
