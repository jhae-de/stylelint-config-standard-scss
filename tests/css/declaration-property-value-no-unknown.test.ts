import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('declaration-property-value-no-unknown', {
  name: 'Allow unknown values for properties within declarations',
  code: `
    test {
      top: black;
      bottom: unknown;
    }
  `,
});
