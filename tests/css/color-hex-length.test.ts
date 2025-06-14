import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('color-hex-length', {
  name: 'Disallow long notation for hex colors',
  code: `
    test {
      color: #ffffff;
      color: #ffffffaa;
    }
  `,
  expect: {
    errored: true,
    messages: ['Expected "#ffffff" to be "#fff"', 'Expected "#ffffffaa" to be "#fffa"'],
    severities: new Array(2).fill('error') as Severity[],
  },
});
