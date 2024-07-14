import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
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
