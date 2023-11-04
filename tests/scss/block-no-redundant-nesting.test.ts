import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/block-no-redundant-nesting', {
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
