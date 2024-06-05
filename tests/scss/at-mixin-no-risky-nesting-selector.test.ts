import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/at-mixin-no-risky-nesting-selector',
  {
    name: 'Disallow risky nesting selectors within a mixin',
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
    expect: {
      errored: true,
      messages: ['Unexpected nested parent selector in @mixin rule'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow risky nesting selectors within a mixin',
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
    expect: {
      errored: true,
      messages: ['Unexpected nested parent selector in @mixin rule'],
      severities: ['error'],
    },
  },
);
