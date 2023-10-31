import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'length-zero-no-unit',
  {
    name: 'Disallow units for zero lengths',
    code: `
      test { top: 0px }
      test { top: 0.0rem }
    `,
    expect: {
      errored: true,
      messages: new Array(2).fill('Unexpected unit'),
      severities: new Array(2).fill('error'),
    },
  },
  {
    name: 'Allow units for zero lengths in custom properties',
    code: 'test { --x: 0px; }',
  },
);
