import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('selector-no-deprecated', {
  name: 'Disallow deprecated selectors',
  code: `
    acronym {}
    test:focus-ring {}
    test::shadow {}
  `,
  expect: {
    errored: true,
    messages: [
      'Deprecated selector "acronym"',
      'Expected ":focus-ring" to be ":focus-visible"',
      'Deprecated selector "::shadow"',
    ],
    severities: new Array(3).fill('error') as Severity[],
  },
});
