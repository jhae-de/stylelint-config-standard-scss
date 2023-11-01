import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/at-import-partial-extension', {
  name: 'Disallow extension in @import commands',
  code: `
    @import "test.scss";
    @import "path/test", "test.scss";
  `,
  expect: {
    errored: true,
    messages: new Array(2).fill('Unexpected extension ".scss" in @import'),
    severities: new Array(2).fill('error'),
  },
});
