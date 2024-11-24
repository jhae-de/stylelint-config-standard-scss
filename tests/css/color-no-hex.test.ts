import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('color-no-hex', {
  name: 'Allow hex colors',
  code: `
    test { color: #fff; }
    test { color: #ffffff; }
    test { color: #ffffffaa; }
  `,
});
