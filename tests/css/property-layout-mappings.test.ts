import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'property-layout-mappings',
  {
    name: 'Allow flow-relative layout mappings',
    code: 'test { margin-inline-start: 0; }',
  },
  {
    name: 'Allow physical layout mappings',
    code: 'test { margin-left: 0; }',
  },
);
