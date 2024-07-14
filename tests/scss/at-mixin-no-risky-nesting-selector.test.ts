import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/at-mixin-no-risky-nesting-selector',
  {
    name: 'Allow risky nesting selectors within a mixin',
    code: `
      @mixin test {
        .test {
          color: black;
          
          .test & {
            color: white;
          }
        }
      }
    `,
  },
  {
    name: 'Allow risky nesting selectors within a mixin',
    code: `
      @mixin test {
        .test {
          color: black;
          
          .test, .test & .test {
            color: white;
          }
        }
      }
    `,
  },
);
