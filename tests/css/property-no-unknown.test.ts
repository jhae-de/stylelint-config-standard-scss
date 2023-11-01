import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

// This rule is disabled in favor of scss/property-no-unknown, so unknown properties should be allowed.

RuleTest.describe('property-no-unknown', {
  name: 'Allow unknown properties',
  code: `
    test {
      colr: black;
      my-property: 1;
      -moz-align-self: center;
      -moz-overflow-scrolling: center;
    }
  `,
});
