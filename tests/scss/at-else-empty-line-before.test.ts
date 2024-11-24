import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/at-else-empty-line-before',
  {
    name: 'Disallow empty lines before @else statements',
    code: `
      test {
        @if ($x == 1) {}

        @else {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected empty line before @else'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow empty lines before @else statements',
    code: `
      test {
        @if ($x == 1) {}
        @else if ($x == 2) {}

        @else {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected empty line before @else'],
      severities: ['error'],
    },
  },
);
