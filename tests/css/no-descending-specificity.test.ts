import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'no-descending-specificity',
  {
    name: 'Disallow selectors of lower specificity from coming after overriding selectors of higher specificity',
    code: `
      b a { color: black; }
      a { color: white; }
    `,
    expect: {
      errored: true,
      messages: ['Expected selector "a" to come before selector "b a"'],
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
      messages: ['Expected selector "a" to come before selector "a + a"'],
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
      messages: ['Expected selector "a[foo]" to come before selector "b > a[foo]"'],
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
      messages: ['Expected selector "b" to come before selector "a > b"'],
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
      messages: ['Expected selector "a" to come before selector "#c a"'],
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
      messages: ['Expected selector "a" to come before selector "b a"'],
      severities: ['error'],
    },
  },
);
