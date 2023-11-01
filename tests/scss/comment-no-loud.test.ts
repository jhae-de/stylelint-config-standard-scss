import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/comment-no-loud', {
  name: 'Allow /*-comments',
  code: `
    /* Comment */
    
    /*
     * Comment
     */
  `,
});
