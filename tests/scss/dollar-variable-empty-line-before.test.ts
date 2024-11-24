import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/dollar-variable-empty-line-before',
  {
    name: 'Require an empty line before $-variable declarations',
    code: `
      @import "test.css";
      $test: 1;
    `,
    expect: {
      errored: true,
      messages: ['Expected an empty line before $-variable'],
      severities: ['error'],
    },
  },
  {
    name: 'Require an empty line before $-variable declarations except after $-variable',
    code: `
      $test-1: 1;

      $test-2: 2;
    `,
    expect: {
      errored: true,
      messages: ['Unexpected empty line before $-variable'],
      severities: ['error'],
    },
  },
  {
    name: 'Require an empty line before $-variable declarations except first nested',
    code: `
      test {

        $test: 1;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected empty line before $-variable'],
      severities: ['error'],
    },
  },
  {
    name: 'Ignore an empty line before $-variable declarations after comment',
    code: `
      // Comment
      $test-1: 1
      
      /* Comment */
      $test-2: 1;
    `,
  },
  {
    name: 'Ignore an empty line before $-variable declarations inside single-line block',
    code: `
      test {
        $test: 1;
      }
    `,
  },
);
