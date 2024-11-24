import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/function-quote-no-quoted-strings-inside', {
  name: 'Disallow quoted strings inside the quote function',
  code: `
    $test: 'Helvetica';
    test {
      font-family: quote($test);
    }
  `,
  expect: {
    errored: true,
    messages: ['Quote function used with an already-quoted string'],
    severities: ['error'],
  },
});
