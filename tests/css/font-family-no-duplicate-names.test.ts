import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'font-family-no-duplicate-names',
  {
    name: 'Disallow duplicate names within font families',
    code: 'test { font-family: "Times", Times, serif; }',
    expect: {
      errored: true,
      messages: ['Unexpected duplicate name Times'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate names within font families',
    code: `test { font: 1em "Arial", 'Arial', sans-serif; }`,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate name Arial'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate names within font families',
    code: 'test { font: normal 16px/32px -apple-system, BlinkMacSystemFont, sans-serif, sans-serif; }',
    expect: {
      errored: true,
      messages: ['Unexpected duplicate name sans-serif'],
      severities: ['error'],
    },
  },
);
