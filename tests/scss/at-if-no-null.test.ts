import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

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
    severities: new Array(2).fill('error') as Severity[],
  },
});
