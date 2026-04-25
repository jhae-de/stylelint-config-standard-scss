import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('selector-pseudo-class-no-unknown', {
  name: 'Disallow unknown pseudo-class selectors',
  code: `
    div:unknown {}
    div:UNKNOWN {}
    a:hoverr {}
  `,
  expect: {
    errored: true,
    messages: [
      'Unknown pseudo-class selector ":unknown"',
      'Unknown pseudo-class selector ":UNKNOWN"',
      'Unknown pseudo-class selector ":hoverr"',
    ],
    severities: new Array(3).fill('error') as Severity[],
  },
});
