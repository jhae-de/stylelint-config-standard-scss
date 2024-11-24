import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

// This rule is disabled in the stylelint-config-recommended-scss config.

new ConfigVerifier('index.yaml').verify('annotation-no-unknown', {
  name: 'Allow unknown annotations',
  code: 'test { color: black !imprtant; }',
});
