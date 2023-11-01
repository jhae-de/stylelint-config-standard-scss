import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/at-extend-no-missing-placeholder', {
  name: 'Disallow "@extend" with missing placeholder',
  code: `
    test {
      @extend .class;
      @extend #identifer;
      @extend .test-#{$dynamically-generated-name};
    }
  `,
  expect: {
    errored: true,
    messages: new Array(3).fill('Expected a placeholder selector (e.g. %placeholder) to be used in @extend'),
    severities: new Array(3).fill('error'),
  },
});
