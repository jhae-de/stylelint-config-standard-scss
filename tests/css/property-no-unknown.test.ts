import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'property-no-unknown',
  {
    name: 'Disallow unknown properties',
    code: `
      test {
        colr: black;
        my-property: 1;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected unknown property "colr"', 'Unexpected unknown property "my-property"'],
      severities: ['error', 'error'],
    },
  },
  {
    name: 'Allow unknown prefixed properties',
    code: `
      test {
        -moz-align-self: center;
        -moz-overflow-scrolling: center;
      }
    `,
  },
);
