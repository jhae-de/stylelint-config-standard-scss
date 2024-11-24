import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/function-no-unknown', {
  name: 'Allow unknown functions',
  code: 'test { transform: unknown(1); }',
});
