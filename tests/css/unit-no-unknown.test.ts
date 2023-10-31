import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'unit-no-unknown',
  {
    name: 'Disallow unknown units',
    code: 'test { width: 10pixels; }',
    expect: {
      errored: true,
      messages: ['Unexpected unknown unit "pixels"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unknown units',
    code: 'test { width: calc(10px + 10pixels); }',
    expect: {
      errored: true,
      messages: ['Unexpected unknown unit "pixels"'],
      severities: ['error'],
    },
  },
);
