import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

// Double-slash comments are valid in scss.

new ConfigVerifier('index.yaml').verify(
  'no-invalid-double-slash-comments',
  {
    name: 'Allow invalid double-slash comments',
    code: `
      test {
        //color: black;
      }
    `,
  },
  {
    name: 'Allow invalid double-slash comments',
    code: '//test { color: black; }',
  },
  {
    name: 'Allow invalid double-slash comments',
    code: `
      // Comment {}
      test {
        color: black;
      }
    `,
  },
);
