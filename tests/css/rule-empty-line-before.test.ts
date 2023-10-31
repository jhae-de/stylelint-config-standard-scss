import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'rule-empty-line-before',
  {
    name: 'Require an empty line before rules',
    code: 'a {} b {}',
    expect: {
      errored: true,
      messages: ['Expected empty line before rule'],
      severities: ['error'],
    },
  },
  {
    name: 'Require an empty line before rules',
    code: `
      a {}
      b {}
    `,
    expect: {
      errored: true,
      messages: ['Expected empty line before rule'],
      severities: ['error'],
    },
  },
  {
    name: 'Require an empty line before rules except first nested',
    code: `
      @media {
        a {}
        
        b {}
      }
    `,
  },
  {
    name: 'Ignore an empty line before rules after comment',
    code: `
      /* Comment */
      test {}
    `,
  },
);
