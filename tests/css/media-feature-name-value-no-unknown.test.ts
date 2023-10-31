import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('media-feature-name-value-no-unknown', {
  name: 'Allow unknown values for media features',
  code: `
    @media (color: black) {}
    @media (width: 10) {}
    @media (width: auto) {}
  `,
});
