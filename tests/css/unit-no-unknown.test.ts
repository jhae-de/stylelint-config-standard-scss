import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'unit-no-unknown',
  {
    name: 'Disallow unknown units',
    code: 'test { width: 10pixels; }',
    expect: {
      errored: true,
      messages: ['Unexpected unknown unit "pixels"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unknown units',
    code: 'test { width: calc(10px + 10pixels); }',
    expect: {
      errored: true,
      messages: ['Unexpected unknown unit "pixels"'],
      severities: ['error'],
    },
  },
);
