import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('color-named', {
  name: 'Ignore named colors',
  code: `
    test {
      color: #000000;
      color: white;
    }
  `,
});
