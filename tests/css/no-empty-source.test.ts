import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'no-empty-source',
  {
    name: 'Disallow empty sources',
    code: '',
    expect: {
      errored: true,
      messages: ['Unexpected empty source'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow empty sources',
    code: '\t\t',
    expect: {
      errored: true,
      messages: ['Unexpected empty source'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow empty sources',
    code: '\n',
    expect: {
      errored: true,
      messages: ['Unexpected empty source'],
      severities: ['error'],
    },
  },
);
