import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'selector-type-no-unknown',
  {
    name: 'Disallow unknown type selectors',
    code: `
      unknown {}
      tag {}
    `,
    expect: {
      errored: true,
      messages: ['Unexpected unknown type selector "unknown"', 'Unexpected unknown type selector "tag"'],
      severities: ['error', 'error'],
    },
  },
  {
    name: 'Allow unknown custom type selectors',
    code: 'x-foo {}',
  },
);
