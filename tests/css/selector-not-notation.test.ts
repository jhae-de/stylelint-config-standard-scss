import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('selector-not-notation', {
  name: 'Require complex notation for :not() pseudo-class selectors',
  code: ':not(a):not(b) {}',
  expect: {
    errored: true,
    messages: ['Expected complex :not() pseudo-class notation'],
    severities: ['error'],
  },
});
