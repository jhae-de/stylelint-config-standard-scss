import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
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
