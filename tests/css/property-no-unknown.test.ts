import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'property-no-unknown',
  {
    name: 'Disallow unknown properties',
    code: `
      test { colr: black; }
      test { my-property: 1; }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected unknown property "colr"', 'Unexpected unknown property "my-property"'],
      severities: ['error', 'error'],
    },
  },
  {
    name: 'Allow unknown prefixed properties',
    code: `
      test {
        -moz-align-self: center;
        -moz-overflow-scrolling: center;
      }
    `,
  },
);
