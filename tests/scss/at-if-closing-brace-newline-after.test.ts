import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/at-if-closing-brace-newline-after',
  {
    name: 'Require a newline after the closing brace of @if statements',
    code: `
      test {
        @if ($x == 1) {
        } width: 10px;
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected newline after "}" of @if statement'],
      severities: ['error'],
    },
  },
  {
    name: 'Require a newline after the closing brace of @if statements',
    code: `
      test {
        @if ($x == 1) {
        }
        @else {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline after "}" of @if statement'],
      severities: ['error'],
    },
  },
);
