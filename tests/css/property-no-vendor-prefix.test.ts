import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('property-no-vendor-prefix', {
  name: 'Disallow vendor prefixes for properties',
  code: `
    test {
      -webkit-transform: scale(1);
      -moz-columns: 2;
    }
  `,
  expect: {
    errored: true,
    messages: ['Unexpected vendor-prefix "-webkit-transform"', 'Unexpected vendor-prefix "-moz-columns"'],
    severities: ['error', 'error'],
  },
});
