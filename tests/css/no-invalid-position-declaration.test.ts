import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('no-invalid-position-declaration', {
  name: 'Disallow invalid position declarations',
  code: `
    color: black;
    --test: black;
    
    @media all {
      color: black;
    }
  `,
  expect: {
    errored: true,
    messages: new Array(3).fill('Unexpected invalid position declaration') as string[],
    severities: new Array(3).fill('error') as Severity[],
  },
});
