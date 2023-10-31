import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

// This rule is disabled in the stylelint-config-recommended-scss config.

RuleTest.describe('media-query-no-invalid', {
  name: 'Allow invalid media queries',
  code: `
    @media not(min-width: 300px) {}
    @media (width == 100px) {}
    @media (color) and (hover) or (width) {}
  `,
});
