import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('media-feature-name-value-no-unknown', {
  name: 'Allow unknown values for media features',
  code: `
    @media (color: black) {}
    @media (width: 10) {}
    @media (width: auto) {}
  `,
});
