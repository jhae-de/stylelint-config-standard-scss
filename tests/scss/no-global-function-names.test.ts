import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/no-global-function-names', {
  name: 'Disallow the use of global function names',
  code: 'test { background: adjust-color(#000000, $red: 10); }',
  expect: {
    errored: true,
    messages: ['Expected color.adjust instead of adjust-color'],
    severities: ['error'],
  },
});
