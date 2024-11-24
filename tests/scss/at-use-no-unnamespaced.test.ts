import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/at-use-no-unnamespaced', {
  name: 'Allow usage of @use without a namespace',
  code: '@use "foo" as *;',
});
