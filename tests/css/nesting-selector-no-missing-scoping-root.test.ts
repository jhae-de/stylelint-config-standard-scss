import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'nesting-selector-no-missing-scoping-root',
  {
    name: 'Disallow missing scoping root for nesting selectors',
    code: `
    & {}
    
    @media all {
      & {}
    }
    
    @scope (&) {}
  `,
    expect: {
      errored: true,
      messages: new Array(3).fill('Unexpected missing scoping root') as string[],
      severities: new Array(3).fill('error') as Severity[],
    },
  },
  {
    name: 'Allow missing scoping root for nesting selectors within @mixin at-rule',
    code: `
    @mixin test {
      & {}
    }
  `,
  },
);
