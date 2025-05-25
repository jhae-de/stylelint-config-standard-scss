import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('property-no-vendor-prefix', {
  name: 'Disallow vendor prefixes for properties',
  code: `
    test {
      -webkit-transform: scale(1);
      -moz-columns: 2;
    }
  `,
  expect: {
    errored: true,
    messages: [
      'Unexpected vendor-prefixed property "-webkit-transform"',
      'Unexpected vendor-prefixed property "-moz-columns"',
    ],
    severities: new Array(2).fill('error') as Severity[],
  },
});
