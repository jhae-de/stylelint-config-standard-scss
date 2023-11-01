import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/selector-nest-combinators', {
  name: 'Ignore nesting of combinators in selectors',
  code: `
    .foo .bar {}
    .foo {
      .bar {}
    }
  `,
});
