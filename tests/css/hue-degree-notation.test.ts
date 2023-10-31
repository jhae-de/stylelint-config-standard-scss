import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('hue-degree-notation', {
  name: 'Require angle notation for degree hues',
  code: `
    test {
      background-color: hsl(180 25% 50%);
      color: lch(57.25% 18.25 10 / 25%);
    }
  `,
  expect: {
    errored: true,
    messages: ['Expected "180" to be "180deg"', 'Expected "10" to be "10deg"'],
    severities: ['error', 'error'],
  },
});
