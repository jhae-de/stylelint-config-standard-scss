import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('color-no-invalid-hex', {
  name: 'Disallow invalid hex colors',
  code: `
    test { color: #00; }
    test { color: #fff1az; }
    test { color: #12345aa; }
  `,
  expect: {
    errored: true,
    messages: ['Invalid hex color "#00"', 'Invalid hex color "#fff1az"', 'Invalid hex color "#12345aa"'],
    severities: new Array(3).fill('error') as Severity[],
  },
});
