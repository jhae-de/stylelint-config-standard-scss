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
      'Unexpected unknown pseudo-class selector ":unknown"',
      'Unexpected unknown pseudo-class selector ":UNKNOWN"',
      'Unexpected unknown pseudo-class selector ":hoverr"',
    ],
    severities: new Array(3).fill('error') as Severity[],
  },
});
