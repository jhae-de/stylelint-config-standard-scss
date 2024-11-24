import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/double-slash-comment-inline',
  {
    name: 'Ignore //-comments to be inline comments',
    code: `
      // Comment
      test { width: 10px; }
    `,
  },
  {
    name: 'Ignore //-comments to be inline comments',
    code: `
      test {
        // Comment
        width: 10px;
      }
    `,
  },
  {
    name: 'Ignore //-comments to be inline comments',
    code: `
      test {
        width: 10px; // Comment
      }
    `,
  },
  {
    name: 'Ignore //-comments to be inline comments',
    code: `
      a, // Comment
      b {
        width: 10px;
      }
    `,
  },
);
