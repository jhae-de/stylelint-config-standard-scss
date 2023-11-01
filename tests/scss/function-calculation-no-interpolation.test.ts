import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/function-calculation-no-interpolation',
  {
    name: 'Disallow interpolation in calculation functions',
    code: `
      $test: 1;
      
      test {
        width: calc(#{$test + 1});
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected interpolation in "calc".'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow interpolation in calculation functions',
    code: `
      $test: 1;
      
      test {
        width: calc(max(#{$c}));
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected interpolation in "max".'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow interpolation in calculation functions',
    code: `
      $test: 1;
      
      test {
        width: min(#{$c});
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected interpolation in "min".'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow interpolation in calculation functions',
    code: `
      $test: 1;
      
      test {
        width: clamp(#{$c} + 2px);
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected interpolation in "clamp".'],
      severities: ['error'],
    },
  },
);
