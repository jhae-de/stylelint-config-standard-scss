import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('color-named', {
  name: 'Ignore named colors',
  code: `
    test {
      color: #000000;
      color: white;
    }
  `,
});
