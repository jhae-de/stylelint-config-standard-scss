import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'comment-empty-line-before',
  {
    name: 'Require an empty line before comments',
    code: `
      test {}
      /* Comment */
    `,
    expect: {
      errored: true,
      messages: ['Expected empty line before comment'],
      severities: ['error'],
    },
  },
  {
    name: 'Require an empty line before comments except first nested',
    code: `
      test {
        /* Comment */
        color: black;
      }
    `,
  },
  {
    name: 'Ignore an empty line before Stylelint commands',
    code: `
      test {
        background: black;
        /* stylelint-disable-next-line color-no-hex */
        color: #ffffff;
      }
    `,
  },
);
