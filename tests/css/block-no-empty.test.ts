import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('block-no-empty', {
  name: 'Disallow empty blocks',
  code: `
    test {}
    test { }
    
    @media print {
        test {}
      }
  `,
  expect: {
    errored: true,
    messages: new Array(3).fill('Unexpected empty block') as string[],
    severities: new Array(3).fill('error') as Severity[],
  },
});
