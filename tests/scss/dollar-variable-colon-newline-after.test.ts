import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/dollar-variable-colon-newline-after', {
  name: 'Ignore a newline after the colon in $-variable declarations',
  code: `
    $test: 100px;
    
    test { $test: 100px; }
    
    $box-shadow: 0 0 0 1px #000000,
      0 0 2px 1px rgba(255, 255, 255, 0.5);
  `,
});
