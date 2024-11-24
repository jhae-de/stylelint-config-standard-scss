import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/no-unused-private-members',
  {
    name: 'Allow unused private members',
    code: `
      @function _function1() {}
      @function _function2() {}
      
      test {
        width: _function1();
      }
    `,
  },
  {
    name: 'Allow unused private members',
    code: `
      @mixin _mixin1 {}
      @mixin mixin2 {}
      
      test {
        @include mixin2;
      }
    `,
  },
  {
    name: 'Allow unused private members',
    code: `
      $variable1: 0;
      $-variable2: 0;
      
      test {
        width: $variable1;
      }
    `,
  },
  {
    name: 'Allow unused private members',
    code: `
      %-placeholder1:hover {}
      test.%placeholder2 {}
      
      test {
        @extend %placeholder2;
        width: 0;
      }
    `,
  },
);
