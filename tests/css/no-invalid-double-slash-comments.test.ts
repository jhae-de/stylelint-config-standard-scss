import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

// Double-slash comments are valid in scss.

RuleTest.describe(
  'no-invalid-double-slash-comments',
  {
    name: 'Allow invalid double-slash comments',
    code: `
      test {
        //color: black;
      }
    `,
  },
  {
    name: 'Allow invalid double-slash comments',
    code: '//test { color: black; }',
  },
  {
    name: 'Allow invalid double-slash comments',
    code: `
      // Comment {}
      test {
        color: black;
      }
    `,
  },
);
