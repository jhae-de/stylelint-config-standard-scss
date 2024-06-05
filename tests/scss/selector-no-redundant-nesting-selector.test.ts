import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/selector-no-redundant-nesting-selector',
  {
    name: 'Allow redundant nesting selectors',
    code: `
      test {
        & a {}
      }
    `,
  },
  {
    name: 'Allow redundant nesting selectors',
    code: `
      test {
        & > a {}
      }
    `,
  },
  {
    name: 'Allow redundant nesting selectors',
    code: `
      test {
        & test {}
      }
    `,
  },
  {
    name: 'Allow redundant nesting selectors',
    code: `
      test {
        & + test {}
      }
    `,
  },
);
