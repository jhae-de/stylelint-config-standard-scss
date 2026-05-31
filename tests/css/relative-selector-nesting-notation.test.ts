import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'relative-selector-nesting-notation',
  {
    name: 'Allow explicit nesting selector notation',
    code: `
      test {
        & nested {}
      }
    `,
  },
  {
    name: 'Allow implicit nesting selector notation',
    code: `
      test {
        nested {}
      }
    `,
  },
);
