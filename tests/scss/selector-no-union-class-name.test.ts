import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/selector-no-union-class-name',
  {
    name: 'Allow union class names with the parent selector',
    code: `
      .test {
        &-union {}
      }
    `,
  },
  {
    name: 'Allow union class names with the parent selector',
    code: `
      test {
        &-union {}
      }
    `,
  },
  {
    name: 'Allow union class names with the parent selector',
    code: `
      test {
        &_union {}
      }
    `,
  },
  {
    name: 'Allow union class names with the parent selector',
    code: `
      test {
        &union {}
      }
    `,
  },
);
