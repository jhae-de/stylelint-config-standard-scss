import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('at-rule-no-vendor-prefix', {
  name: 'Disallow vendor prefixes for at-rules',
  code: '@-webkit-keyframes {}',
  expect: {
    errored: true,
    messages: ['Unexpected vendor-prefixed at-rule "@-webkit-keyframes"'],
    severities: ['error'],
  },
});
