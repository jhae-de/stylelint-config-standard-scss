import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/at-else-closing-brace-newline-after',
  {
    name: 'Require a newline after the closing brace of @else statements',
    code: `
      test {
        @if ($x == 1) {
        } @else {
        } width: 10px;
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected newline after "}" of @else statement'],
      severities: ['error'],
    },
  },
  {
    name: 'Require a newline after the closing brace of @else statements',
    code: `
      test {
        @if ($x == 1) {
        } @else if {}
        @else {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline after "}" of @else statement'],
      severities: ['error'],
    },
  },
);
