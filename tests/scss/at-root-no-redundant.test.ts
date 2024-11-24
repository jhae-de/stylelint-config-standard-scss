import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/at-root-no-redundant',
  {
    name: 'Allow redundant @at-root rule',
    code: '@at-root test {}',
  },
  {
    name: 'Allow redundant @at-root rule',
    code: `
      test {
        @at-root .test & {}
      }
    `,
  },
  {
    name: 'Allow redundant @at-root rule',
    code: `
      @keyframes test {
        @at-root from {}
        to {}
      }
    `,
  },
);
