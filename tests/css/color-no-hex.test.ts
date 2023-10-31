import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('color-no-hex', {
  name: 'Allow hex colors',
  code: `
    test { color: #fff; }
    test { color: #ffffff; }
    test { color: #ffffffaa; }
  `,
});
