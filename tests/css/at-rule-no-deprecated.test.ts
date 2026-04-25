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
    messages: ['Deprecated at-rule "@nest"', 'Deprecated at-rule "@document"', 'Deprecated at-rule "@viewport"'],
    severities: new Array(3).fill('error') as Severity[],
  },
});
