import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/comment-no-loud', {
  name: 'Allow /*-comments',
  code: `
    /* Comment */
    
    /*
     * Comment
     */
  `,
});
