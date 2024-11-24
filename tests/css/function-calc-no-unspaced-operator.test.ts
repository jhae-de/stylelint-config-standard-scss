import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'function-calc-no-unspaced-operator',
  {
    name: 'Disallow invalid unspaced operator within calc functions',
    code: 'test { top: calc(1px+2px); }',
    expect: {
      errored: true,
      messages: ['Expected single space after "+" operator', 'Expected single space before "+" operator'],
      severities: ['error', 'error'],
    },
  },
  {
    name: 'Disallow invalid unspaced operator within calc functions',
    code: 'test { top: calc(1px+ 2px); }',
    expect: {
      errored: true,
      messages: ['Expected single space before "+" operator'],
      severities: ['error'],
    },
  },
);
