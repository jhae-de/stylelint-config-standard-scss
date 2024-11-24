import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'rule-empty-line-before',
  {
    name: 'Require an empty line before rules',
    code: 'a {} b {}',
  },
  {
    name: 'Require an empty line before rules',
    code: `
      a {}
      b {}
    `,
  },
  {
    name: 'Require an empty line before rules always multi-line',
    code: `
      a {
        color: black;
      }
      b {
        color: white;
      }
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
