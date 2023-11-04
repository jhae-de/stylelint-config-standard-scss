import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/property-no-unknown', {
  name: 'Ignore unknown properties',
  code: `
    test {
      colr: black;
      my-property: 1;
      font: {
        stuff: bold;
      }
      -moz-align-self: center;
      -moz-overflow-scrolling: center;
    }
  `,
});
