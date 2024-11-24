import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/at-mixin-no-risky-nesting-selector',
  {
    name: 'Allow risky nesting selectors within a mixin',
    code: `
      @mixin test {
        .test {
          color: black;
          
          .test & {
            color: white;
          }
        }
      }
    `,
  },
  {
    name: 'Allow risky nesting selectors within a mixin',
    code: `
      @mixin test {
        .test {
          color: black;
          
          .test, .test & .test {
            color: white;
          }
        }
      }
    `,
  },
);
