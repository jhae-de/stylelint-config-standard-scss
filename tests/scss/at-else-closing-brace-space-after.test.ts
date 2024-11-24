import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/at-else-closing-brace-space-after',
  {
    name: 'Require a single space after the closing brace of @else statements',
    code: `
      test {
        @if ($x == 1) {
        } @else if ($x == 2) {
        }@else {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected single space after "}" of @else statement'],
      severities: ['error'],
    },
  },
  {
    name: 'Require a single space after the closing brace of @else statements',
    code: `
      test {
        @if ($x == 1) {
        } @else if ($x == 2) {
        }
        @else {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected single space after "}" of @else statement'],
      severities: ['error'],
    },
  },
  {
    name: 'Require a single space after the closing brace of @else statements',
    code: `
      test {
        @if ($x == 1) {
        } @else if ($x == 2) {
        }
        @else {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected single space after "}" of @else statement'],
      severities: ['error'],
    },
  },
  {
    name: 'Require a single space after the closing brace of @else statements',
    code: `
      test {
        @if ($x == 1) {
        } @else if ($x == 2) {
        }  @else {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected single space after "}" of @else statement'],
      severities: ['error'],
    },
  },
);
