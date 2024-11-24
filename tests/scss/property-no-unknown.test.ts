import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/property-no-unknown', {
  name: 'Ignore unknown properties',
  code: `
    test {
      colr: black;
      my-property: 1;
      font: {
        stuff: bold;
      }
      -moz-align-self: center;
      -moz-overflow-scrolling: center;
    }
  `,
});
