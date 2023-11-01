import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/double-slash-comment-whitespace-inside', {
  name: 'Require whitespace after the // in //-comments',
  code: '//Comment',
  expect: {
    errored: true,
    messages: ['Expected a space after //'],
    severities: ['error'],
  },
});
