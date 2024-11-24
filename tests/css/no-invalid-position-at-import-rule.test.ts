import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'no-invalid-position-at-import-rule',
  {
    name: 'Disallow invalid position @import rules',
    code: `
      test {}
      @import 'test.css';
    `,
    expect: {
      errored: true,
      messages: ['Unexpected invalid position @import rule'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow invalid position @import rules',
    code: `
      @media print {}
      @import 'test.css';
    `,
    expect: {
      errored: true,
      messages: ['Unexpected invalid position @import rule'],
      severities: ['error'],
    },
  },
);
