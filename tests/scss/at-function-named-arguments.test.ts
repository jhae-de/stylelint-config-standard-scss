import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/at-function-named-arguments',
  {
    name: 'Disallow unnamed arguments in function calls',
    code: `
      test {
        animation: animation(250ms, 100ms, infinite);
        border: reset($value: 20, 'bar', $color: #FFFFFF);
      }
    `,
    expect: {
      errored: true,
      messages: new Array(4).fill('Expected a named parameter to be used in function call'),
      severities: new Array(4).fill('error'),
    },
  },
  {
    name: 'Allow unnamed single argument in function calls',
    code: `
      test {
        animation: animation(250ms);
        animation: animation($duration: 250ms);
        animation: animation($duration: 250ms, $delay: 100ms, $direction: infinite);
      }
    `,
  },
);
