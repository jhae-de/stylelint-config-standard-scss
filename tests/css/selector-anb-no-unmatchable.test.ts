import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'selector-anb-no-unmatchable',
  {
    name: 'Disallow unmatchable An+B selectors',
    code: 'div:nth-child(0) {}',
    expect: {
      errored: true,
      messages: ['Unexpected unmatchable An+B selector ":nth-child(0)"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unmatchable An+B selectors',
    code: 'div:nth-last-child(0n) {}',
    expect: {
      errored: true,
      messages: ['Unexpected unmatchable An+B selector ":nth-last-child(0n)"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unmatchable An+B selectors',
    code: 'div:nth-of-type(0n+0) {}',
    expect: {
      errored: true,
      messages: ['Unexpected unmatchable An+B selector ":nth-of-type(0n+0)"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unmatchable An+B selectors',
    code: 'div:nth-last-of-type(0 of a) {}',
    expect: {
      errored: true,
      messages: ['Unexpected unmatchable An+B selector ":nth-last-of-type(0 of a)"'],
      severities: ['error'],
    },
  },
);
