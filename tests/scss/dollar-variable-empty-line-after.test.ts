import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/dollar-variable-empty-line-after',
  {
    name: 'Ignore empty lines after $-variable declarations',
    code: `
      $test: 200px;
      @import 'test.css';
    `,
  },
  {
    name: 'Ignore empty lines after $-variable declarations',
    code: `
      test {
        $test: 1;
      }
    `,
  },
  {
    name: 'Ignore empty lines after $-variable declarations',
    code: `
      $test: 1;
      
      test { color: black; }
    `,
  },
);
