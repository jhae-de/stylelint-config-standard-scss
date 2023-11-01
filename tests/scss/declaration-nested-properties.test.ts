import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/declaration-nested-properties',
  {
    name: 'Ignore properties with - in their names to be in a form of a nested group',
    code: `
      test {
        margin-left: 10px;
      }
    `,
  },
  {
    name: 'Ignore properties with - in their names to be in a form of a nested group',
    code: `
      test {
        font: {
          size: 10px;
        }
        font-weight: 400;
      }
    `,
  },
  {
    name: 'Ignore properties with - in their names to be in a form of a nested group',
    code: `
      test {
        margin: {
          left: 10px;
        }
      }
    `,
  },
  {
    name: 'Ignore properties with - in their names to be in a form of a nested group',
    code: `
      test {
        background: black {
          repeat: no-repeat;
        }
      }
    `,
  },
);
