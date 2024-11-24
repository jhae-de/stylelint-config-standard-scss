import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'declaration-block-single-line-max-declarations',
  {
    name: 'Limit the number of declarations within a single-line declaration block',
    code: 'test { color: black; top: 10px; }',
    expect: {
      errored: true,
      messages: ['Expected no more than 1 declaration'],
      severities: ['error'],
    },
  },
  {
    name: 'Limit the number of declarations within a single-line declaration block',
    code: `
      a,
      b { color: black; top: 10px; }
    `,
    expect: {
      errored: true,
      messages: ['Expected no more than 1 declaration'],
      severities: ['error'],
    },
  },
  {
    name: 'Limit the number of declarations within a single-line declaration block',
    code: 'test { color: black; }',
  },
  {
    name: 'Limit the number of declarations within a single-line declaration block',
    code: `
      a,
      b { color: black; }
    `,
  },
  {
    name: 'Limit the number of declarations within a single-line declaration block',
    code: `
      test {
        color: black;
        top: 10px;
      }
    `,
  },
);
