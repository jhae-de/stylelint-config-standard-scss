import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/at-else-if-parentheses-space-before', {
  name: 'Require a space before @else if parentheses',
  code: `
    test {
      @if ($x == 1) {}
      @else if($x == 2) {}
      @else if  ($x == 3) {}
      @else {}
    }
  `,
  expect: {
    errored: true,
    messages: new Array(2).fill('Expected a single space before parentheses in else-if declaration') as string[],
    severities: new Array(2).fill('error') as Severity[],
  },
});
