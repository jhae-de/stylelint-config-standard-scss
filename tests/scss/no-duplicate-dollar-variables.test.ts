import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/no-duplicate-dollar-variables', {
  name: 'Allow duplicate dollar variables within a stylesheet',
  code: `
    $test: 1;
    $test: 2;
  `,
});
