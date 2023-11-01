import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/property-no-unknown',
  {
    name: 'Disallow unknown properties',
    code: `
      test {
        colr: black;
        my-property: 1;
        font: {
          stuff: bold;
        }
      }
    `,
    expect: {
      errored: true,
      messages: [
        'Unexpected unknown property "colr"',
        'Unexpected unknown property "my-property"',
        'Unexpected unknown property "font-stuff"',
      ],
      severities: ['error', 'error', 'error'],
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
