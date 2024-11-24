import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/no-dollar-variables', {
  name: 'Allow dollar variables within a stylesheet',
  code: '$test: 1;',
});
