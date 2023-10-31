import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('import-notation', {
  name: 'Require string notation for @import rules',
  code: `@import url('test-1.css');`,
  expect: {
    errored: true,
    messages: [`Expected "url('test-1.css')" to be "'test-1.css'"`],
    severities: ['error'],
  },
});
