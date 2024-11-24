import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('font-weight-notation', {
  name: 'Ignore numeric or named font-weight values',
  code: `
    test {
      font-weight: bold;
      font: italic normal 20px sans-serif;
      font-weight: normal bold;
      font-weight: 700;
      font: italic 400 20px sans-serif;
      font-weight: lighter;
    }
  `,
});
