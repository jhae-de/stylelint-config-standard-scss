import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

// This rule is disabled in the stylelint-config-recommended-scss config.

new ConfigVerifier('index.yaml').verify('media-query-no-invalid', {
  name: 'Allow invalid media queries',
  code: `
    @media not(min-width: 300px) {}
    @media (width == 100px) {}
    @media (color) and (hover) or (width) {}
  `,
});
