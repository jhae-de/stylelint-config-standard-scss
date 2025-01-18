import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('at-rule-prelude-no-invalid', {
  name: 'Allow invalid preludes for at-rules.',
  code: `
    @property test {}
    @font-palette-values test {}
  `,
});
