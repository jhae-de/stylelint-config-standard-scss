import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('declaration-property-value-keyword-no-deprecated', {
  name: 'Disallow deprecated keywords for properties within declarations',
  code: 'test { overflow: overlay; }',
  expect: {
    errored: true,
    messages: ['Expected "overlay" to be "auto"'],
    severities: ['error'],
  },
});
