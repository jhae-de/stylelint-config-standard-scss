import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('color-no-invalid-hex', {
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
