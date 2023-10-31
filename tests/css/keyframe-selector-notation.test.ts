import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'keyframe-selector-notation',
  {
    name: 'Require percentage notation unless within a keyword-only block',
    code: `
      @keyframes test {
        from {}
        100% {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected "from" to be "0%"'],
      severities: ['error'],
    },
  },
  {
    name: 'Require percentage notation unless within a keyword-only block',
    code: `
      @keyframes foo {
        0% {}
        100% {}
      }
      
      @keyframes bar {
        from {}
        to {}
      }
    `,
  },
);
