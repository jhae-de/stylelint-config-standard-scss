import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/at-if-no-null', {
  name: 'Disallow check for equality to null',
  code: `
    test {
      @if $a == null {}
      @if $b != null {}
    }
  `,
  expect: {
    errored: true,
    messages: [
      'Expected @if not statement rather than @if statement == null',
      'Expected @if statement rather than @if statement != null',
    ],
    severities: ['error', 'error'],
  },
});
