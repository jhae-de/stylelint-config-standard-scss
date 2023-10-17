import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'at-rule-disallowed-list',
  {
    name: 'rejects "@import" rule',
    code: `
      @import "test.scss";
      @debug "Debug";
    `,
    expect: {
      errored: true,
      messages: ['Unexpected at-rule "import"', 'Unexpected at-rule "debug"'],
      severities: new Array(2).fill('error'),
    },
  },
  {
    name: 'accepts "@use" rule',
    code: '@use "test.scss";',
  },
);
