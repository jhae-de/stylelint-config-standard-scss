import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('at-rule-no-deprecated', {
  name: 'Disallow deprecated at-rules',
  code: `
    test {
      @apply test;
      @nest & test {}
     }

    @document url("https://example.com") {}

    @viewport {}
  `,
  expect: {
    errored: true,
    messages: [
      'Unexpected deprecated at-rule "@nest"',
      'Unexpected deprecated at-rule "@document"',
      'Unexpected deprecated at-rule "@viewport"',
    ],
    severities: new Array(3).fill('error') as Severity[],
  },
});
