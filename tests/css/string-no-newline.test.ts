import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'string-no-newline',
  {
    name: 'Disallow invalid newlines within strings',
    code: `
      test {
        content: "first
        second";
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline in string'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow invalid newlines within strings',
    code: `
      [title="something
      is probably wrong"] {}
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline in string'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow invalid newlines within strings',
    code: `
      test {
        font-family: "Times
          New
          Roman";
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline in string'],
      severities: ['error'],
    },
  },
);
