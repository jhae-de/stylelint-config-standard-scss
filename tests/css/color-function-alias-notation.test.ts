import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('color-function-alias-notation', {
  name: 'Disallow color functions with alpha',
  code: 'test { color: rgba(0 0 0); }',
  expect: {
    errored: true,
    messages: ['Expected "rgba" to be "rgb"'],
    severities: ['error'],
  },
});
