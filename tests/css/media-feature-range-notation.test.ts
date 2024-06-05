import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('media-feature-range-notation', {
  name: 'Require context notation for media feature ranges',
  code: `
    @media (min-width: 1px) {}
    @media (min-width: 1px) and (max-width: 2px) {}
  `,
  expect: {
    errored: true,
    messages: new Array(3).fill('Expected "context" media feature range notation') as string[],
    severities: new Array(3).fill('error') as Severity[],
  },
});
