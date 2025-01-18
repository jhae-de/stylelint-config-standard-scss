import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('declaration-property-value-keyword-no-deprecated', {
  name: 'Allow deprecated keywords for properties within declarations.',
  code: 'test { overflow: overlay; }',
});
