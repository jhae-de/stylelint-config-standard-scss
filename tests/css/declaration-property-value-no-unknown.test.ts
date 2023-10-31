import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('declaration-property-value-no-unknown', {
  name: 'Allow unknown values for properties within declarations',
  code: `
    test {
      top: black;
      bottom: unknown;
    }
  `,
});
