import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/double-slash-comment-empty-line-before',
  {
    name: 'Require an empty line before //-comments',
    code: `
      test {}
      // Comment
    `,
    expect: {
      errored: true,
      messages: ['Expected empty line before comment'],
      severities: ['error'],
    },
  },
  {
    name: 'Require an empty line before //-comments except first nested',
    code: `
      test {
        
        // Comment
        color: black;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected empty line before comment'],
      severities: ['error'],
    },
  },
  {
    name: 'Ignore an empty line before //-comments between comments',
    code: `
      test {
        background: black;
        
        // Comment
        // Comment
        color: white;
      }
    `,
  },
  {
    name: 'Ignore an empty line before Stylelint command',
    code: `
      a {
        background: black;
        // stylelint-disable-next-line color-no-hex
        color: #ffffff;
      }
    `,
  },
);
