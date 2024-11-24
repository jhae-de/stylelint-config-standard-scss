import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

// This rule is disabled in the stylelint-config-recommended-scss config in favor of scss/at-rule-no-unknown, so
// unknown at-rules should be allowed.

new ConfigVerifier('index.yaml').verify('at-rule-no-unknown', {
  name: 'Allow unknown at-rules',
  code: '@unknown {}',
});
