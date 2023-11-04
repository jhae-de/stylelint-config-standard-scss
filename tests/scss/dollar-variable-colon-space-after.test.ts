import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/dollar-variable-colon-space-after', {
  name: 'Require a space after the colon in $-variable declarations',
  code: `
    $test:1;
    $test:  2;
    $test:
      3;
    
    test { $test:4 }
    
    $box-shadow:0 0 0 1px #000000,
      0 0 2px 1px rgba(255, 255, 255, 0.5);
  `,
  expect: {
    errored: true,
    messages: new Array(5).fill('Expected single space after ":"'),
    severities: new Array(5).fill('error'),
  },
});
