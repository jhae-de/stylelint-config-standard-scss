import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'selector-no-qualifying-type',
  {
    name: 'Allow qualifying an attribute selector by type',
    code: 'input[type="button"] {}',
  },
  {
    name: 'Allow qualifying a class selector by type',
    code: 'div.foo {}',
  },
  {
    name: 'Allow qualifying an id selector by type',
    code: 'div#foo {}',
  },
);
