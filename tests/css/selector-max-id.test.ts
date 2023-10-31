import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'selector-max-id',
  {
    name: 'Limit the number of ID selectors in a selector',
    code: '#foo #bar {}',
    expect: {
      errored: true,
      messages: ['Expected "#foo #bar" to have no more than 1 ID selector'],
      severities: ['error'],
    },
  },
  {
    name: 'Limit the number of ID selectors in a selector',
    code: `
      #foo {
        & #bar {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected "#foo #bar" to have no more than 1 ID selector'],
      severities: ['error'],
    },
  },
  {
    name: 'Limit the number of ID selectors in a selector',
    code: `
      #foo {
        & > #bar {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected "#foo > #bar" to have no more than 1 ID selector'],
      severities: ['error'],
    },
  },
);
