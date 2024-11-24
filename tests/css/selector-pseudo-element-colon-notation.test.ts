import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('selector-pseudo-element-colon-notation', {
  name: 'Require double colon notation for applicable pseudo-element selectors',
  code: 'div:before { color: black; }',
  expect: {
    errored: true,
    messages: ['Expected double colon pseudo-element notation'],
    severities: ['error'],
  },
});
