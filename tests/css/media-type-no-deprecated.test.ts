import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('media-type-no-deprecated', {
  name: 'Disallow deprecated media types',
  code: '@media projection {}',
  expect: {
    errored: true,
    messages: ['Unexpected deprecated media type "projection"'],
    severities: ['error'],
  },
});
