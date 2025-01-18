import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('at-rule-descriptor-no-unknown', {
  name: 'Allow unknown descriptors for at-rules.',
  code: `
    @counter-style test { unknown-descriptor: cyclic; }
    @property --test { unknown-descriptor: "<color>"; }
  `,
});
