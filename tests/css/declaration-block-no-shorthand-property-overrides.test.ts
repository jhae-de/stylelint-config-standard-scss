import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'declaration-block-no-shorthand-property-overrides',
  {
    name: 'Disallow shorthand properties that override related longhand properties',
    code: `
      test {
        padding-left: 10px;
        padding: 20px;
      }
    `,
    expect: {
      errored: true,
      messages: ['Overridden property "padding-left" by shorthand "padding"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow shorthand properties that override related longhand properties',
    code: `
      test {
        transition-property: opacity;
        transition: opacity 1s linear;
      }
    `,
    expect: {
      errored: true,
      messages: ['Overridden property "transition-property" by shorthand "transition"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow shorthand properties that override related longhand properties',
    code: `
      test {
        -webkit-transition-property: opacity;
        -webkit-transition: opacity 1s linear;
      }
    `,
    expect: {
      errored: true,
      messages: ['Overridden property "-webkit-transition-property" by shorthand "-webkit-transition"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow shorthand properties that override related longhand properties',
    code: `
      test {
        border-top-width: 1px;
        top: 0;
        bottom: 3px;
        border: 2px solid blue;
      }
    `,
    expect: {
      errored: true,
      messages: ['Overridden property "border-top-width" by shorthand "border"'],
      severities: ['error'],
    },
  },
);
