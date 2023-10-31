import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'declaration-block-no-duplicate-properties',
  {
    name: 'Disallow duplicate properties within declaration blocks',
    code: `
      test {
        color: black;
        color: white;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate "color"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate properties within declaration blocks',
    code: `
      test {
        color: black;
        background: none;
        color: white;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate "color"'],
      severities: ['error'],
    },
  },
);
