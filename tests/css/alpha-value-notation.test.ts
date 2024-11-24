import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'alpha-value-notation',
  {
    name: 'Require percentage notation for alpha values',
    code: 'test { color: rgb(0 0 0 / 0.5); }',
    expect: {
      errored: true,
      messages: ['Expected "0.5" to be "50%"'],
      severities: ['error'],
    },
  },
  {
    name: 'Require percentage notation for alpha values except properties',
    code: `
      test {
        opacity: 0.5;
        fill-opacity: 0.5;
        flood-opacity: 0.5;
        stop-opacity: 0.5;
        stroke-opacity: 0.5;
      }
    `,
  },
);
