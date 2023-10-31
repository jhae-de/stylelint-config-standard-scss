import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('declaration-no-important', {
  name: 'Allow !important within declarations',
  code: 'test { color: black !important; }',
});
