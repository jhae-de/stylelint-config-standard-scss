import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/function-unquote-no-unquoted-strings-inside', {
  name: 'rejects unquoted strings inside the unquote function',
  code: `
    $test: Helvetica;
    .test {
      font-family: unquote($test);
    }
  `,
  expect: {
    errored: true,
    messages: ['Unquote function used with an already-unquoted string'],
    severities: ['error'],
  },
});
