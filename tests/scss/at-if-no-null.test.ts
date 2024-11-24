import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/at-if-no-null', {
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
