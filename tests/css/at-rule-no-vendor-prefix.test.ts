import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('at-rule-no-vendor-prefix', {
  name: 'Disallow vendor prefixes for at-rules',
  code: '@-webkit-keyframes {}',
  expect: {
    errored: true,
    messages: ['Unexpected vendor-prefixed at-rule "@-webkit-keyframes"'],
    severities: ['error'],
  },
});
