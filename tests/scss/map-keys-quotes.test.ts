import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/map-keys-quotes', {
  name: 'Do not require quoted keys in Sass maps',
  code: '$test: (Helvetica: 16px, Arial: 32px);',
});
