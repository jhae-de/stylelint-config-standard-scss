import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/dimension-no-non-numeric-values', {
  name: 'Ignore non-numeric values when interpolating a value with a unit',
  code: 'test { padding: #{test}px; }',
});
