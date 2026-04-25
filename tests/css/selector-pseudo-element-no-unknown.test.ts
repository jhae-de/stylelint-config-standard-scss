import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('selector-pseudo-element-no-unknown', {
  name: 'Disallow unknown pseudo-element selectors',
  code: `
    div::pseudo {}
    div::PSEUDO {}
    div::element {}
  `,
  expect: {
    errored: true,
    messages: [
      'Unknown pseudo-element selector "::pseudo"',
      'Unknown pseudo-element selector "::PSEUDO"',
      'Unknown pseudo-element selector "::element"',
    ],
    severities: new Array(3).fill('error') as Severity[],
  },
});
