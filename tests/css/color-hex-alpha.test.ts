import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('color-hex-alpha', {
  name: 'Ignore alpha channel for hex colors',
  code: `
    test { color: #fff; }
    test { color: #ffffff; }
    test { color: #fffa; }
    test { color: #ffffffaa; }
  `,
});
