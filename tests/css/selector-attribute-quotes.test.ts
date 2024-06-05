import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('selector-attribute-quotes', {
  name: 'Require quotes for attribute values',
  code: `
    [title=test] {}
    [class^=test] {}
  `,
  expect: {
    errored: true,
    messages: new Array(2).fill('Expected quotes around "test"') as string[],
    severities: new Array(2).fill('error') as Severity[],
  },
});
