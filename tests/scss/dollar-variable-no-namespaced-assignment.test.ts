import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/dollar-variable-no-namespaced-assignment', {
  name: 'Allow assignment to namespaced variables',
  code: 'imported.$test: 1;',
});
