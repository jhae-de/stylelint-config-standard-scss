import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('color-hex-length', {
  name: 'Disallow long notation for hex colors',
  code: `
    test {
      color: #ffffff;
      color: #ffffffaa;
    }
  `,
  expect: {
    errored: true,
    messages: ['Expected "#ffffff" to be "#fff"', 'Expected "#ffffffaa" to be "#fffa"'],
    severities: ['error', 'error'],
  },
});
