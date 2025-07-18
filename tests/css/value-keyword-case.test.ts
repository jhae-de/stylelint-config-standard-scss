import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('value-keyword-case', {
  name: 'Allow only lowercase keyword values',
  code: `
    test { display: Block; }
    test { display: bLoCk; }
    test { display: BLOCK; }
    test { transition: -WEBKIT-TRANSFORM 1s; }
  `,
  expect: {
    errored: true,
    messages: [
      'Expected "Block" to be "block"',
      'Expected "bLoCk" to be "block"',
      'Expected "BLOCK" to be "block"',
      'Expected "-WEBKIT-TRANSFORM" to be "-webkit-transform"',
    ],
    severities: new Array(4).fill('error') as Severity[],
  },
});
