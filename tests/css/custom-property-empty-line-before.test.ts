import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'custom-property-empty-line-before',
  {
    name: 'Require an empty line before custom properties except after custom property',
    code: `
      test {
        top: 10px;
        
        --foo: black;
        --bar: white;
      }
    `,
  },
  {
    name: 'Require an empty line before custom properties except first nested',
    code: `
      test {
        --foo: black;
        --bar: white;
      }
    `,
  },
  {
    name: 'Ignore an empty line before custom properties after comment',
    code: `
      test {
        /* Comment */
        --foo: black;
        --bar: white;
      }
    `,
  },
  {
    name: 'Ignore an empty line before custom properties inside single line block',
    code: 'test { --foo: black; --bar: white; }',
  },
);
