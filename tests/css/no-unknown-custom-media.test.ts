import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('no-unknown-custom-media', {
  name: 'Allow unknown custom media',
  code: `
    @custom-media --test (min-width: 0);
    @media (--test), (max-width: 32rem) {}
  `,
});
