import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
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
