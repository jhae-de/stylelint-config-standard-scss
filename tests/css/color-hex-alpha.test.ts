import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('color-hex-alpha', {
  name: 'Ignore alpha channel for hex colors',
  code: `
    test { color: #fff; }
    test { color: #ffffff; }
    test { color: #fffa; }
    test { color: #ffffffaa; }
  `,
});
