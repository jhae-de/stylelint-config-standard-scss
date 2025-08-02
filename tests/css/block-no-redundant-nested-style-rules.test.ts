import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('block-no-redundant-nested-style-rules', {
  name: 'Disallow redundant nested style rules within blocks',
  code: `
    test {
      & { color: black; }
    }
    
    test {
      @media all {
        & { color: black; }
      }
    }
  `,
  expect: {
    errored: true,
    messages: new Array(2).fill('Unexpected redundant nested style rule') as string[],
    severities: new Array(2).fill('error') as Severity[],
  },
});
