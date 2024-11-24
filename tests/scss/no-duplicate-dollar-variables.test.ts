import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/no-duplicate-dollar-variables', {
  name: 'Allow duplicate dollar variables within a stylesheet',
  code: `
    $test: 1;
    $test: 2;
  `,
});
