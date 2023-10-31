import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('color-hex-length', {
  name: 'Disallow short notation for hex colors',
  code: `
    test { color: #fff; }
    test { color: #fffa; }
  `,
  expect: {
    errored: true,
    messages: ['Expected "#fff" to be "#ffffff"', 'Expected "#fffa" to be "#ffffffaa"'],
    severities: ['error', 'error'],
  },
});
