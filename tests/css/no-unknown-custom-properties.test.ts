import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('no-unknown-custom-properties', {
  name: 'Allow unknown custom properties',
  code: `
    test { color: var(--foo); }
    test { color: var(--foo, var(--bar)); }
  `,
});
