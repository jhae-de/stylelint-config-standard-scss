import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'color-hex-length',
  {
    name: 'rejects short notation for hex colors',
    code: 'color: #FFF;',
    expect: {
      errored: true,
      messages: ['Expected "#FFF" to be "#FFFFFF"'],
      severities: ['error'],
    },
  },
  {
    name: 'accepts long notation for hex colors',
    code: 'color: #FFFFFF;',
  },
);
