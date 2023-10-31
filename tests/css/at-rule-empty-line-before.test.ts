import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'at-rule-empty-line-before',
  {
    name: 'Require an empty line before at-rules',
    code: 'test {} @media {}',
    expect: {
      errored: true,
      messages: ['Expected empty line before at-rule'],
      severities: ['error'],
    },
  },
  {
    name: 'Require an empty line before at-rules',
    code: `
      test {}
      @media {}
    `,
    expect: {
      errored: true,
      messages: ['Expected empty line before at-rule'],
      severities: ['error'],
    },
  },
  {
    name: 'Require an empty line before at-rules except blockless after same name blockless',
    code: `
      @import "a.scss";
      @import "b.scss";
      
      @media print {}
    `,
  },
  {
    name: 'Require an empty line before at-rules except first nested',
    code: `
      a {
        @extend foo;
        color: black;
      }
      
      b {
        color: black;
        
        @extend foo;
      }
    `,
  },
  {
    name: 'Ignore an empty line before at-rules after comment',
    code: `
      /* Comment */
      @media {}
    `,
  },
  {
    name: 'Ignore an empty line before at-rules after comment',
    code: `
      /* Comment */
      
      @media {}
    `,
  },
  {
    name: 'Ignore an empty line before at-rules after comment',
    code: `
      @media {} /* Comment */
      
      @media {}
    `,
  },
  {
    name: 'Ignore an empty line before "else" at-rule',
    code: `
      @if true {}
      @else {}
    `,
  },
);
