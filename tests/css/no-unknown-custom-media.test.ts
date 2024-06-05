import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('no-unknown-custom-media', {
  name: 'Allow unknown custom media',
  code: `
    @custom-media --test (min-width: 0);
    @media (--test), (max-width: 32rem) {}
  `,
});
