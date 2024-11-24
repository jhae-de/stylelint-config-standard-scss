import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/dollar-variable-first-in-block', {
  name: 'Do not require $-variable declarations to be placed first in a block',
  code: `
    @import "test.css";
    $test-1: 1;
    
    test {
      width: 100px;
      $test-2: 2;
    }
  `,
});
