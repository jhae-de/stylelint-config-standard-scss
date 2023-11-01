import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/dollar-variable-no-missing-interpolation',
  {
    name: 'Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers',
    code: `
      $test: my-anim;
      @keyframes $test {}
    `,
    expect: {
      errored: true,
      messages: ['Expected variable $test to be interpolated when using it with @keyframes'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers',
    code: `
      $test: "circled-digits";
      
      @counter-style $test {
        system: fixed;
        symbols: ➀ ➁ ➂;
        suffix: ' ';
        speak-as: numbers;
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected variable $test to be interpolated when using it with @counter-style'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers',
    code: `
      $test: "my-counter";
      
      body {
        counter-reset: $test;
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected variable $test to be interpolated when using it with counter-reset'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers',
    code: `
      $test: "my-anim";
      
      @supports (animation-name: $test) {
        @keyframes {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected variable $test to be interpolated when using it with @supports'],
      severities: ['error'],
    },
  },
);
