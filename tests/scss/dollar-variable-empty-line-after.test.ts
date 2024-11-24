import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/dollar-variable-empty-line-after',
  {
    name: 'Ignore empty lines after $-variable declarations',
    code: `
      $test: 200px;
      @import 'test.css';
    `,
  },
  {
    name: 'Ignore empty lines after $-variable declarations',
    code: `
      test {
        $test: 1;
      }
    `,
  },
  {
    name: 'Ignore empty lines after $-variable declarations',
    code: `
      $test: 1;
      
      test { color: black; }
    `,
  },
);
