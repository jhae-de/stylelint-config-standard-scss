import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'font-family-name-quotes',
  {
    name: 'Require quotes for font family names where recommended',
    code: 'test { font-family: Times New Roman, Times, serif; }',
    expect: {
      errored: true,
      messages: ['Expected quotes around "Times New Roman"'],
      severities: ['error'],
    },
  },
  {
    name: 'Require quotes for font family names where recommended',
    code: 'test { font-family: MyFontVersion6, sake_case_font; }',
    expect: {
      errored: true,
      messages: ['Expected quotes around "MyFontVersion6"', 'Expected quotes around "sake_case_font"'],
      severities: new Array(2).fill('error') as Severity[],
    },
  },
  {
    name: 'Require quotes for font family names where recommended',
    code: `test { font-family: 'Arial', sans-serif; }`,
    expect: {
      errored: true,
      messages: ['Unexpected quotes around "Arial"'],
      severities: ['error'],
    },
  },
  {
    name: 'Require quotes for font family names where recommended',
    code: 'test { font: 1em Times New Roman, Times, serif; }',
    expect: {
      errored: true,
      messages: ['Expected quotes around "Times New Roman"'],
      severities: ['error'],
    },
  },
);
