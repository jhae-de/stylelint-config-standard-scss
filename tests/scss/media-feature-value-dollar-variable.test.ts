import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/media-feature-value-dollar-variable',
  {
    name: 'Ignore a media feature value be a $-variable',
    code: `
      @media (min-width: 768px) {
        test { color: black; }
      }
    `,
  },
  {
    name: 'Ignore a media feature value be a $-variable',
    code: `
      @media (min-width: $test) {
        test { color: black; }
      }
    `,
  },
);
