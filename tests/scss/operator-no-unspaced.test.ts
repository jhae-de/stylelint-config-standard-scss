import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'scss/operator-no-unspaced',
  {
    name: 'Disallow unspaced operators in Sass operations',
    code: 'test { width: 10+1; }',
    expect: {
      errored: true,
      messages: ['Expected single space before "+"', 'Expected single space after "+"'],
      severities: new Array(2).fill('error') as Severity[],
    },
  },
  {
    name: 'Disallow unspaced operators in Sass operations',
    code: 'test { width: 10+ 1; }',
    expect: {
      errored: true,
      messages: ['Expected single space before "+"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unspaced operators in Sass operations',
    code: 'test { width: 10-1; }',
    expect: {
      errored: true,
      messages: ['Expected single space before "-"', 'Expected single space after "-"'],
      severities: new Array(2).fill('error') as Severity[],
    },
  },
  {
    name: 'Disallow unspaced operators in Sass operations',
    code: 'test { width: 10px* 1.5; }',
    expect: {
      errored: true,
      messages: ['Expected single space before "*"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unspaced operators in Sass operations',
    code: '@if ($test==10) {}',
    expect: {
      errored: true,
      messages: ['Expected single space before "=="', 'Expected single space after "=="'],
      severities: new Array(2).fill('error') as Severity[],
    },
  },
  {
    name: 'Disallow unspaced operators in Sass operations',
    code: 'test { width: 10px  * 1.5; }',
    expect: {
      errored: true,
      messages: ['Expected single space before "*"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unspaced operators in Sass operations',
    code: 'test { width: (10) /1; }',
    expect: {
      errored: true,
      messages: ['Expected single space after "/"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unspaced operators in Sass operations',
    code: `
      .class#{1 +1}name {
        color: black;
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected single space after "+"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unspaced operators in Sass operations',
    code: `
      test {
        background-#{"col" +"or"}: black;
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected single space after "+"'],
      severities: ['error'],
    },
  },
);
