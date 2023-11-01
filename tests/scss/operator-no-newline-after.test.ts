import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/operator-no-newline-after',
  {
    name: 'Disallow linebreaks after Sass operators',
    code: `
      test { width: 10 +
      1; }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline after "+"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow linebreaks after Sass operators',
    code: `
      test {
        width: 10 +
        1;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline after "+"'],
      severities: ['error'],
    },
  },
);
