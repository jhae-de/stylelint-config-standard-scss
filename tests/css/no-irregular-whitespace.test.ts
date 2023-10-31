import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('no-irregular-whitespace', {
  name: 'Disallow irregular whitespaces',
  code: '.firstClass .secondClass {}',
  expect: {
    errored: true,
    messages: ['Unexpected irregular whitespace'],
    severities: ['error'],
  },
});
