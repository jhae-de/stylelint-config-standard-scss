import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'no-descending-specificity',
  {
    name: 'Disallow selectors of lower specificity from coming after overriding selectors of higher specificity',
    code: `
      b a { color: black; }
      a { color: white; }
    `,
    expect: {
      errored: true,
      messages: ['Expected selector "a" to come before selector "b a", at line 2'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow selectors of lower specificity from coming after overriding selectors of higher specificity',
    code: `
      a + a { color: black; }
      a { color: white; }
    `,
    expect: {
      errored: true,
      messages: ['Expected selector "a" to come before selector "a + a", at line 2'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow selectors of lower specificity from coming after overriding selectors of higher specificity',
    code: `
      b > a[foo] { color: black; }
      a[foo] { color: white; }
    `,
    expect: {
      errored: true,
      messages: ['Expected selector "a[foo]" to come before selector "b > a[foo]", at line 2'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow selectors of lower specificity from coming after overriding selectors of higher specificity',
    code: `
      a {
        & > b { color: black; }
      }
      b { color: white; }
    `,
    expect: {
      errored: true,
      messages: ['Expected selector "b" to come before selector "a > b", at line 3'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow selectors of lower specificity from coming after overriding selectors of higher specificity',
    code: `
      @media print {
        #c a { color: black; }
        a { color: white; }
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected selector "a" to come before selector "#c a", at line 3'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow selectors of lower specificity from coming after overriding selectors of higher specificity',
    code: `
      b a { color: black; }
      h1 { color: gray; }
      h2 { color: gray; }
      h3 { color: gray; }
      a { color: white; }
    `,
    expect: {
      errored: true,
      messages: ['Expected selector "a" to come before selector "b a", at line 2'],
      severities: ['error'],
    },
  },
);
