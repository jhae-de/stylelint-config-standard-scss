import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/dollar-variable-colon-space-before', {
  name: 'Disallow a space before the colon in $-variables',
  code: `
    $test-1 : 1;

    test { $test-2
    : 2 }
  `,
  expect: {
    errored: true,
    messages: new Array(2).fill('Unexpected whitespace before ":"') as string[],
    severities: new Array(2).fill('error') as Severity[],
  },
});
