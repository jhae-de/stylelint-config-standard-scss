import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/at-use-no-redundant-alias', {
  name: 'Allow redundant namespace aliases',
  code: `
    @use "foo" as foo;
    @use "sass:math" as math;
    @use "src/corners" as corners;
  `,
});
