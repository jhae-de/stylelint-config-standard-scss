import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('no-irregular-whitespace', {
  name: 'Disallow irregular whitespaces',
  code: '.firstClass .secondClass {}',
  expect: {
    errored: true,
    messages: ['Unexpected irregular whitespace'],
    severities: ['error'],
  },
});
