import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/at-if-closing-brace-space-after',
  {
    name: 'Require a single space after the closing brace of @if statements',
    code: `
      test {
        @if ($x == 1) {
        }@else {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected single space after "}" of @if statement'],
      severities: ['error'],
    },
  },
  {
    name: 'Require a single space after the closing brace of @if statements',
    code: `
      test {
        @if ($x == 1) {
        }
        @else {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected single space after "}" of @if statement'],
      severities: ['error'],
    },
  },
  {
    name: 'Require a single space after the closing brace of @if statements',
    code: `
      // @if has a space and a newline after the closing brace
      test {
        @if ($x == 1) {
        } 
        @else {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected single space after "}" of @if statement'],
      severities: ['error'],
    },
  },
  {
    name: 'Require a single space after the closing brace of @if statements',
    code: `
      test {
        @if ($x == 1) {
        }  @else {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected single space after "}" of @if statement'],
      severities: ['error'],
    },
  },
);
