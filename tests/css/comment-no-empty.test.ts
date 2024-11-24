import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

// This rule is disabled in the stylelint-config-recommended-scss config in favor of scss/comment-no-empty, so empty
// css comments should be allowed.

new ConfigVerifier('index.yaml').verify('comment-no-empty', {
  name: 'Allow empty comments',
  code: `
    /**/
    /* */
    /*
     
     */
  `,
});
