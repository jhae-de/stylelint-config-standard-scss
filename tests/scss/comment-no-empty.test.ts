import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/comment-no-empty', {
  name: 'rejects empty comments',
  code: `
    /**/
    /* */
    /*
    
    */
    //
  `,
  expect: {
    errored: true,
    messages: new Array(4).fill('Unexpected empty comment'),
    severities: new Array(4).fill('error'),
  },
});
