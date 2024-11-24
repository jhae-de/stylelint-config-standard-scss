import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/at-use-no-redundant-alias', {
  name: 'Allow redundant namespace aliases',
  code: `
    @use "foo" as foo;
    @use "sass:math" as math;
    @use "src/corners" as corners;
  `,
});
