import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'string-no-newline',
  {
    name: 'Disallow invalid newlines within strings',
    code: `
      test {
        content: "first
        second";
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline in string'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow invalid newlines within strings',
    code: `
      [title="something
      is probably wrong"] {}
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline in string'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow invalid newlines within strings',
    code: `
      test {
        font-family: "Times
          New
          Roman";
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline in string'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow invalid newlines within strings in at-rule preludes',
    code: `
      @import url('test
      .css');
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline in string'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow invalid newlines within strings in declaration values',
    code: `
      test {
        content: "foo
          bar";
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected newline in string'],
      severities: ['error'],
    },
  },
);
