import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'no-descending-specificity',
  {
    name: 'Disallow selectors of lower specificity from coming after overriding selectors of higher specificity',
    code: `
      b a {}
      a {}
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
      a + a {}
      a {}
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
      b > a[foo] {}
      a[foo] {}
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
        & > b {}
      }
      b {}
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
        #c a {}
        a {}
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
      b a {}
      h1 {}
      h2 {}
      h3 {}
      a {}
    `,
    expect: {
      errored: true,
      messages: ['Expected selector "a" to come before selector "b a"'],
      severities: ['error'],
    },
  },
);
