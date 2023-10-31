import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('selector-no-qualifying-type', {
  name: 'Allow qualifying a selector by type',
  code: `
    div.foo {}
    div#foo {}
    input[type="button"] {}
  `,
});
