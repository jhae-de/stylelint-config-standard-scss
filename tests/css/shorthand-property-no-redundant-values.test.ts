import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'shorthand-property-no-redundant-values',
  {
    name: 'Disallow redundant values within shorthand properties',
    code: 'test { margin: 1px 1px; }',
    expect: {
      errored: true,
      messages: ['Expected "1px 1px" to be "1px"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow redundant values within shorthand properties',
    code: 'test { margin: 1px 1px 1px 1px; }',
    expect: {
      errored: true,
      messages: ['Expected "1px 1px 1px 1px" to be "1px"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow redundant values within shorthand properties',
    code: 'test { padding: 1px 2px 1px; }',
    expect: {
      errored: true,
      messages: ['Expected "1px 2px 1px" to be "1px 2px"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow redundant values within shorthand properties',
    code: 'test { border-radius: 1px 2px 1px 2px; }',
    expect: {
      errored: true,
      messages: ['Expected "1px 2px 1px 2px" to be "1px 2px"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow redundant values within shorthand properties',
    code: 'test { -webkit-border-radius: 1px 1px 1px 1px; }',
    expect: {
      errored: true,
      messages: ['Expected "1px 1px 1px 1px" to be "1px"'],
      severities: ['error'],
    },
  },
);
