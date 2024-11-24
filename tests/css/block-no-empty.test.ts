import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('block-no-empty', {
  name: 'Disallow empty blocks',
  code: `
    test {}
    test { }
    
    @media print {
        test {}
      }
  `,
  expect: {
    errored: true,
    messages: new Array(3).fill('Unexpected empty block') as string[],
    severities: new Array(3).fill('error') as Severity[],
  },
});
