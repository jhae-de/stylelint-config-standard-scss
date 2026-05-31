import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'value-keyword-layout-mappings',
  {
    name: 'Allow flow-relative layout mappings',
    code: 'test { text-align: start; }',
  },
  {
    name: 'Allow physical layout mappings',
    code: 'test { text-align: left; }',
  },
);
