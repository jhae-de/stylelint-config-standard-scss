import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/at-mixin-argumentless-call-parentheses', {
  name: 'Require argumentless mixin calls without parentheses',
  code: '@include mixin-name();',
  expect: {
    errored: true,
    messages: ['Unexpected parentheses in argumentless mixin "mixin-name" call'],
    severities: ['error'],
  },
});
