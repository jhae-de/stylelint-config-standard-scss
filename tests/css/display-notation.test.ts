import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'display-notation',
  {
    name: 'Allow short notation for the display property',
    code: 'test { display: grid; }',
  },
  {
    name: 'Allow full notation for the display property',
    code: 'test { display: block grid; }',
  },
);
