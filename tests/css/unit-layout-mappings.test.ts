import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'unit-layout-mappings',
  {
    name: 'Allow flow-relative layout mappings',
    code: 'test { margin-inline-start: 10vi; }',
  },
  {
    name: 'Allow physical layout mappings',
    code: 'test { margin-left: 10vw; }',
  },
);
