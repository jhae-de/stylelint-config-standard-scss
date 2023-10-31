import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('value-keyword-case', {
  name: 'Allow only lowercase keyword values',
  code: `
    test { display: Block; }
    test { display: bLoCk; }
    test { display: BLOCK; }
    test { transition: -WEBKIT-TRANSFORM 1s; }
  `,
  expect: {
    errored: true,
    messages: [
      'Expected "Block" to be "block"',
      'Expected "bLoCk" to be "block"',
      'Expected "BLOCK" to be "block"',
      'Expected "-WEBKIT-TRANSFORM" to be "-webkit-transform"',
    ],
    severities: ['error', 'error', 'error', 'error'],
  },
});
