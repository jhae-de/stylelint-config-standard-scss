import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('function-url-no-scheme-relative', {
  name: 'Allow scheme-relative urls',
  code: 'test { background: url("//example.com/file.test"); }',
});
