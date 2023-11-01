import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/comment-no-empty', {
  name: 'Disallow empty comments',
  code: `
    /**/
    /* */
    /*
    
    */
    //
    test { width: 10px; } //
  `,
  expect: {
    errored: true,
    messages: new Array(5).fill('Unexpected empty comment'),
    severities: new Array(5).fill('error'),
  },
});
