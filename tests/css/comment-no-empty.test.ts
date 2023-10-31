import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

// This rule is disabled in the stylelint-config-recommended-scss config in favor of scss/comment-no-empty, so empty
// css comments should be allowed.

RuleTest.describe('comment-no-empty', {
  name: 'Allow empty comments',
  code: `
    /**/
    /* */
    /*
     
     */
  `,
});
