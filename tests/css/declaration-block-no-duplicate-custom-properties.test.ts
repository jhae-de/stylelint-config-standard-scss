import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'declaration-block-no-duplicate-custom-properties',
  {
    name: 'Disallow duplicate custom properties within declaration blocks',
    code: `
      test {
        --custom-property: black;
        --custom-property: white;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate "--custom-property"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate custom properties within declaration blocks',
    code: `
      test {
        --custom-property: black;
        background: none;
        --custom-property: white;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate "--custom-property"'],
      severities: ['error'],
    },
  },
);
