import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/function-quote-no-quoted-strings-inside', {
  name: 'rejects quoted strings inside the quote function',
  code: `
    $test: 'Helvetica';
    .test {
      font-family: quote($test);
    }
  `,
  expect: {
    errored: true,
    messages: ['Quote function used with an already-quoted string'],
    severities: ['error'],
  },
});
