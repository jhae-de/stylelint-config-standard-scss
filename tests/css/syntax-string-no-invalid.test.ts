import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('syntax-string-no-invalid', {
  name: 'Disallow invalid syntax strings.',
  code: `
    @property --foo {
      syntax: "<bar>";
    }
  `,
  expect: {
    errored: true,
    messages: ['Unexpected invalid syntax string ""<bar>""'],
    severities: ['error'],
  },
});
