import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('function-linear-gradient-no-nonstandard-direction', {
  name: 'Disallow non-standard direction values for linear gradient functions',
  code: `
    test { background: linear-gradient(top, black, white); }
    test { background: linear-gradient(to top top, black, white); }
    test { background: linear-gradient(45, black, white); }
  `,
  expect: {
    errored: true,
    messages: new Array(3).fill('Unexpected nonstandard direction'),
    severities: new Array(3).fill('error'),
  },
});
