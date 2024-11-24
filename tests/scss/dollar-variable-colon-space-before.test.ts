import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('scss/dollar-variable-colon-space-before', {
  name: 'Disallow a space before the colon in $-variables',
  code: `
    $test-1 : 1;

    test { $test-2
    : 2 }
  `,
  expect: {
    errored: true,
    messages: new Array(2).fill('Unexpected whitespace before ":"') as string[],
    severities: new Array(2).fill('error') as Severity[],
  },
});
