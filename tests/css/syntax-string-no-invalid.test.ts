import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('syntax-string-no-invalid', {
  name: 'Allow invalid syntax strings.',
  code: `
    @property --foo {
      syntax: "<bar>";
    }
  `,
});
