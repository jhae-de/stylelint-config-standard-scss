import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/block-no-redundant-nesting', {
  name: 'Ignore nesting a single block if it could be merged with its parent block',
  code: `
    .foo {
      .bar {}
    }
    
    .foo {
      &-bar {
        &-baz {
          color: black;
        }
      }
    }
  `,
});
