import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/no-global-function-names', {
  name: 'Disallow the use of global function names',
  code: 'test { background: adjust-color(#000000, $red: 10); }',
  expect: {
    errored: true,
    messages: ['Expected color.adjust instead of adjust-color'],
    severities: ['error'],
  },
});
