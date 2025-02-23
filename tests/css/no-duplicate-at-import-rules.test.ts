import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'no-duplicate-at-import-rules',
  {
    name: 'Disallow duplicate @import rules',
    code: `
      @import "test.css";
      @import "test.css";
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate @import rule test.css'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate @import rules',
    code: `
      @import url("test.css");
      @import url("test.css");
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate @import rule test.css'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate @import rules',
    code: `
      @import "test-1.css";
      @import "test-2.css";
      @import url("test-1.css");
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate @import rule test-1.css'],
      severities: ['error'],
    },
  },
);
