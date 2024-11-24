import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/operator-no-newline-before',
  {
    name: 'Disallow linebreaks before Sass operators',
    code: `
      test { width: 10
      + 1; }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline before "+"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow linebreaks before Sass operators',
    code: `
      test {
        width: 10
        + 1;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline before "+"'],
      severities: ['error'],
    },
  },
);
