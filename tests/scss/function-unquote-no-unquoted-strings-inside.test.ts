import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/function-unquote-no-unquoted-strings-inside', {
  name: 'Disallow unquoted strings inside the unquote function',
  code: `
    $test: Helvetica;
    test {
      font-family: unquote($test);
    }
  `,
  expect: {
    errored: true,
    messages: ['Unquote function used with an already-unquoted string'],
    severities: ['error'],
  },
});
