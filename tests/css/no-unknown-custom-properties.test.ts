import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('no-unknown-custom-properties', {
  name: 'Allow unknown custom properties',
  code: `
    test { color: var(--foo); }
    test { color: var(--foo, var(--bar)); }
  `,
});
