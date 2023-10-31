import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'color-named',
  {
    name: 'Disallow named colors',
    code: 'test { color: black; }',
    expect: {
      errored: true,
      messages: ['Unexpected named color "black"'],
      severities: ['error'],
    },
  },
  {
    name: 'Allow named colors inside functions',
    code: `
      test {
        background-image: url(black);
        color: map.get($color, white);
      }
    `,
  },
);
