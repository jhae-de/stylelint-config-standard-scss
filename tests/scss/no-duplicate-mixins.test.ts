import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/no-duplicate-mixins',
  {
    name: 'Disallow duplicate mixins within a stylesheet',
    code: `
      @mixin font-size-default {
        font-size: 16px;
      }
      @mixin font-size-default {
        font-size: 20px;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate mixin font-size-default'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate mixins within a stylesheet',
    code: `
      @mixin font-size-default {
        font-size: 16px;
      }
      @mixin font-size-sm {
        font-size: 12px;
      }
      @mixin font-size-default {
        font-size: 10px;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate mixin font-size-default'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate mixins within a stylesheet',
    code: `
      @mixin font-size {
        font-size: 16px;
      }
      @mixin font-size($var) {
        font-size: $var;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate mixin font-size'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate mixins within a stylesheet',
    code: `
      @mixin font-size($property, $value) {
        #{$property}: $value;
      }
      @mixin font-size($var) {
        font-size: $var;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate mixin font-size'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate mixins within a stylesheet',
    code: `
      @mixin font-size {
        font-size: 16px;
      }
      
      test {
        @mixin font-size {
          font-size: 20px;
        }
        @include font-size;
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate mixin font-size'],
      severities: ['error'],
    },
  },
);
