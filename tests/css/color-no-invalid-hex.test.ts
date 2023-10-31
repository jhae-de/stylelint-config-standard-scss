import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('color-no-invalid-hex', {
  name: 'Disallow invalid hex colors',
  code: `
    test { color: #00; }
    test { color: #fff1az; }
    test { color: #12345aa; }
  `,
  expect: {
    errored: true,
    messages: [
      'Unexpected invalid hex color "#00"',
      'Unexpected invalid hex color "#fff1az"',
      'Unexpected invalid hex color "#12345aa"',
    ],
    severities: ['error', 'error', 'error'],
  },
});
