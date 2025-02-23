import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('at-rule-no-deprecated', {
  name: 'Allow deprecated at-rules',
  code: `
    test {
      @apply test;
      @nest & test {}
     }

    @document url("https://example.com") {}

    @viewport {}
  `,
});
