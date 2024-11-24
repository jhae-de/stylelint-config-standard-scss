import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/operator-no-newline-after',
  {
    name: 'Disallow linebreaks after Sass operators',
    code: `
      test { width: 10 +
      1; }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline after "+"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow linebreaks after Sass operators',
    code: `
      test {
        width: 10 +
        1;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline after "+"'],
      severities: ['error'],
    },
  },
);
