import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

// This rule is disabled in the stylelint-config-recommended-scss config.

new ConfigVerifier('index.yaml').verify('function-no-unknown', {
  name: 'Allow unknown functions',
  code: 'test { transform: unknown(1); }',
});
