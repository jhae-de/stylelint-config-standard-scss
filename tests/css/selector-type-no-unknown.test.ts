import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

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
      messages: ['Unknown type selector "unknown"', 'Unknown type selector "tag"'],
      severities: new Array(2).fill('error') as Severity[],
    },
  },
  {
    name: 'Allow unknown custom type selectors',
    code: 'x-foo {}',
  },
);
