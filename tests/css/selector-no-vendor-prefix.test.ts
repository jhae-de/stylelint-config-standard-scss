import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('selector-no-vendor-prefix', {
  name: 'Disallow vendor prefixes for selectors',
  code: `
    input::-moz-placeholder {}
    :-webkit-full-screen test {}
  `,
  expect: {
    errored: true,
    messages: [
      'Unexpected vendor-prefixed selector "::-moz-placeholder"',
      'Unexpected vendor-prefixed selector ":-webkit-full-screen"',
    ],
    severities: ['error', 'error'],
  },
});
