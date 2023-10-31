import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'comment-whitespace-inside',
  {
    name: 'Require whitespace on the inside of comment markers',
    code: '/*Comment*/',
    expect: {
      errored: true,
      messages: ['Expected whitespace after "/*"', 'Expected whitespace before "*/"'],
      severities: ['error', 'error'],
    },
  },
  {
    name: 'Require whitespace on the inside of comment markers',
    code: '/*Comment */',
    expect: {
      errored: true,
      messages: ['Expected whitespace after "/*"'],
      severities: ['error'],
    },
  },
  {
    name: 'Require whitespace on the inside of comment markers',
    code: '/** Comment**/',
    expect: {
      errored: true,
      messages: ['Expected whitespace before "*/"'],
      severities: ['error'],
    },
  },
);
