import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('media-feature-name-no-unknown', {
  name: 'Disallow unknown media feature names',
  code: `
    @media screen and (unknown) {}
    @media screen and (unknown: 10px) {}
    @media screen and (unknown > 10px) {}
  `,
  expect: {
    errored: true,
    messages: new Array(3).fill('Unexpected unknown media feature name "unknown"'),
    severities: new Array(3).fill('error'),
  },
});
