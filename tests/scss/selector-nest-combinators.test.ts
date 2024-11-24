import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/selector-nest-combinators', {
  name: 'Ignore nesting of combinators in selectors',
  code: `
    .foo .bar {}
    .foo {
      .bar {}
    }
  `,
});
