import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('keyframe-block-no-duplicate-selectors', {
  name: 'Disallow duplicate selectors within keyframe blocks',
  code: `
    @keyframes foo {
      0% {}
      0% {}
    }
    
    @keyframes bar {
      from {}
      from {}
    }
    
    @keyframes baz {
      from {}
      FROM {}
    }
  `,
  expect: {
    errored: true,
    messages: ['Unexpected duplicate "0%"', 'Unexpected duplicate "from"', 'Unexpected duplicate "FROM"'],
    severities: ['error', 'error', 'error'],
  },
});
