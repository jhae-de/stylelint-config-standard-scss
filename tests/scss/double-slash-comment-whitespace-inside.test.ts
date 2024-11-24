import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/double-slash-comment-whitespace-inside', {
  name: 'Require whitespace after the // in //-comments',
  code: '//Comment',
  expect: {
    errored: true,
    messages: ['Expected a space after //'],
    severities: ['error'],
  },
});
