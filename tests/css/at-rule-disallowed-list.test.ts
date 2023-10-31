import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'at-rule-disallowed-list',
  {
    name: 'Disallow @import rule',
    code: '@import "test.scss";',
    expect: {
      errored: true,
      messages: ['Unexpected at-rule "import"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow @debug rule',
    code: '@debug "Debug";',
    expect: {
      errored: true,
      messages: ['Unexpected at-rule "debug"'],
      severities: ['error'],
    },
  },
);
