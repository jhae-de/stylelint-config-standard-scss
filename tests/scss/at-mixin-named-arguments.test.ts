import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/at-mixin-named-arguments',
  {
    name: 'Disallow unnamed arguments in mixin calls',
    code: `
      test {
        @include animation(250ms, 100ms, infinite);
        @include reset($value: 20, 'bar', $color: #FFFFFF);
      }
    `,
    expect: {
      errored: true,
      messages: new Array(4).fill('Expected a named parameter to be used in at-include call'),
      severities: new Array(4).fill('error'),
    },
  },
  {
    name: 'Allow unnamed single argument in mixin calls',
    code: `
      test {
        @include animation(250ms);
        @include animation($duration: 250ms);
        @include animation($duration: 250ms, $delay: 100ms, $direction: infinite);
      }
    `,
  },
);
