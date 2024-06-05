import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/at-import-partial-extension', {
  name: 'Disallow extension in @import commands',
  code: `
    @import "test.scss";
    @import "path/test", "test.scss";
  `,
  expect: {
    errored: true,
    messages: new Array(2).fill('Unexpected extension ".scss" in @import') as string[],
    severities: new Array(2).fill('error') as Severity[],
  },
});
