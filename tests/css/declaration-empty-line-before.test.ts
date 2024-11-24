import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'declaration-empty-line-before',
  {
    name: 'Require an empty line before declarations except after declaration',
    code: `
      test {
        --foo: black;
        
        left: 10px;
        right: 5px;
      }
    `,
  },
  {
    name: 'Require an empty line before declarations except first nested',
    code: `
      test {
        left: 10px;
        right: 5px;
      }
    `,
  },
  {
    name: 'Ignore an empty line before declarations after comment',
    code: `
      test {
        /* Comment */
        left: 10px;
        right: 5px;
      }
    `,
  },
  {
    name: 'Ignore an empty line before declarations inside single line block',
    code: ' test { left: 10px; right: 5px; }',
  },
);
