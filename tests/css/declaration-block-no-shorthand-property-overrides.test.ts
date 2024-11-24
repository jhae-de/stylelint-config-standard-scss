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
      messages: ['Unexpected shorthand "padding" after "padding-left"'],
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
      messages: ['Unexpected shorthand "transition" after "transition-property"'],
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
      messages: ['Unexpected shorthand "-webkit-transition" after "-webkit-transition-property"'],
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
      messages: ['Unexpected shorthand "border" after "border-top-width"'],
      severities: ['error'],
    },
  },
);
