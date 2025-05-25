import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'comment-whitespace-inside',
  {
    name: 'Require whitespace on the inside of comment markers',
    code: '/*Comment*/',
    expect: {
      errored: true,
      messages: ['Expected whitespace after "/*"', 'Expected whitespace before "*/"'],
      severities: new Array(2).fill('error') as Severity[],
    },
  },
  {
    name: 'Require whitespace on the inside of comment markers',
    code: '/*Comment */',
    expect: {
      errored: true,
      messages: ['Expected whitespace after "/*"'],
      severities: ['error'],
    },
  },
  {
    name: 'Require whitespace on the inside of comment markers',
    code: '/** Comment**/',
    expect: {
      errored: true,
      messages: ['Expected whitespace before "*/"'],
      severities: ['error'],
    },
  },
);
