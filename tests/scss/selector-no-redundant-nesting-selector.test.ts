import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/selector-no-redundant-nesting-selector',
  {
    name: 'Allow redundant nesting selectors',
    code: `
      test {
        & test {}
      }
    `,
  },
  {
    name: 'Allow redundant nesting selectors',
    code: `
      test {
        & > test {}
      }
    `,
  },
  {
    name: 'Allow redundant nesting selectors',
    code: `
      test {
        & .test {}
      }
    `,
  },
  {
    name: 'Allow redundant nesting selectors',
    code: `
      test {
        & + .test {}
      }
    `,
  },
);
