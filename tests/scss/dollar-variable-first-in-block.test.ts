import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/dollar-variable-first-in-block', {
  name: 'Do not require $-variable declarations to be placed first in a block',
  code: `
    @import "test.css";
    $test-1: 1;
    
    test {
      width: 100px;
      $test-2: 2;
    }
  `,
});
