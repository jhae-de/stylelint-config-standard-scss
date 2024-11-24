import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/function-calculation-no-interpolation',
  {
    name: 'Ignore interpolation in calculation functions',
    code: `
      $test: 1;
      
      test {
        width: calc(#{$test + 1});
      }
    `,
  },
  {
    name: 'Ignore interpolation in calculation functions',
    code: `
      $test: 1;
      
      test {
        width: calc(max(#{$c}));
      }
    `,
  },
  {
    name: 'Ignore interpolation in calculation functions',
    code: `
      $test: 1;
      
      test {
        width: min(#{$c});
      }
    `,
  },
  {
    name: 'Ignore interpolation in calculation functions',
    code: `
      $test: 1;
      
      test {
        width: clamp(#{$c} + 2px);
      }
    `,
  },
);
