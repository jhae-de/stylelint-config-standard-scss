import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/at-else-closing-brace-newline-after',
  {
    name: 'Require a newline after the closing brace of @else statements',
    code: `
      test {
        @if ($x == 1) {
        } @else {
        } width: 10px;
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected newline after "}" of @else statement'],
      severities: ['error'],
    },
  },
  {
    name: 'Require a newline after the closing brace of @else statements',
    code: `
      test {
        @if ($x == 1) {
        } @else if {}
        @else {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline after "}" of @else statement'],
      severities: ['error'],
    },
  },
);
