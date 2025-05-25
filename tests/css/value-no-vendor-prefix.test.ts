import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('value-no-vendor-prefix', {
  name: 'Disallow vendor prefixes for values',
  code: `
    test { display: -webkit-flex; }
    test { background: -webkit-linear-gradient(to bottom, black, white); }
  `,
  expect: {
    errored: true,
    messages: [
      'Unexpected vendor-prefixed value "-webkit-flex"',
      'Unexpected vendor-prefixed value "-webkit-linear-gradient"',
    ],
    severities: new Array(2).fill('error') as Severity[],
  },
});
