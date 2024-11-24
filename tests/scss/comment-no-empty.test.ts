import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('scss/comment-no-empty', {
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
    messages: new Array(5).fill('Unexpected empty comment') as string[],
    severities: new Array(5).fill('error') as Severity[],
  },
});
