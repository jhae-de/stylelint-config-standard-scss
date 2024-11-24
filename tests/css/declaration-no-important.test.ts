import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('declaration-no-important', {
  name: 'Allow !important within declarations',
  code: 'test { color: black !important; }',
});
