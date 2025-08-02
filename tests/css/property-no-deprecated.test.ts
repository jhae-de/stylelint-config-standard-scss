import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('property-no-deprecated', {
  name: 'Disallow deprecated properties',
  code: `test {
    clip: rect(0, 0, 0, 0);
    word-wrap: break-word;
  }`,
  expect: {
    errored: true,
    messages: ['Unexpected deprecated property "clip"', 'Expected "word-wrap" to be "overflow-wrap"'],
    severities: new Array(2).fill('error') as Severity[],
  },
});
