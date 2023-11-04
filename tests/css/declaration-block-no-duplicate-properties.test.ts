import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'declaration-block-no-duplicate-properties',
  {
    name: 'Disallow duplicate properties within declaration blocks',
    code: `
      test {
        font-size: 16px;
        font-size: 32px;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate "font-size"'],
      severities: ['error'],
    },
  },
  {
    name: 'Allow consecutive duplicate properties within declaration blocks with different syntaxes',
    code: `
      test {
        font-size: 16px;
        font-size: 1rem;
      }
    `,
  },
);
