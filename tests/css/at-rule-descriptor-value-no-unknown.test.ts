import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('at-rule-descriptor-value-no-unknown', {
  name: 'Allow unknown values for descriptors within at-rules',
  code: `
    @counter-style test { system: unknown; }
    @property --test { syntax: unknown; }
  `,
});
