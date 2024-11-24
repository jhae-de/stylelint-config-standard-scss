import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'custom-property-no-missing-var-function',
  {
    name: 'Disallow missing var function for custom properties',
    code: `
      :root { --foo: red; }
      test { color: --foo; }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected missing var function for "--foo"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow missing var function for custom properties',
    code: `
      @property --foo {}
      test { color: --foo; }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected missing var function for "--foo"'],
      severities: ['error'],
    },
  },
);
