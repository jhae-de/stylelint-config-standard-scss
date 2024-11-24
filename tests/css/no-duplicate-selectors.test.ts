import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'no-duplicate-selectors',
  {
    name: 'Disallow duplicate selectors',
    code: `
      .foo,
      .bar,
      .foo {}
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate selector ".foo", first used at line 2'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate selectors',
    code: `
      .foo {}
      .bar {}
      .foo {}
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate selector ".foo", first used at line 2'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate selectors',
    code: `
      .foo .bar {}
      .bar {}
      .foo .bar {}
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate selector ".foo .bar", first used at line 2'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate selectors',
    code: `
      @media (min-width: 10px) {
        .foo {}
        .foo {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate selector ".foo", first used at line 3'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate selectors',
    code: `
      .foo, .bar {}
      .bar, .foo {}
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate selector ".bar, .foo", first used at line 2'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate selectors',
    code: `
      a .foo, b + .bar {}
      b+.bar,
      a
        .foo {}
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate selector "b+.bar,\n      a\n        .foo", first used at line 2'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate selectors',
    code: `
      a b {}
      a {
        & b {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate selector "& b", first used at line 2'],
      severities: ['error'],
    },
  },
  {
    name: 'Allow duplicate selectors within selector lists',
    code: `
      input, textarea {
        border: 2px;
      }
      textarea {
        border: 1px;
      }
    `,
  },
);
