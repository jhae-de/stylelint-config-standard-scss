import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

// This rule is disabled in the stylelint-config-recommended-scss config.

new ConfigVerifier('index.yaml').verify('no-duplicate-selectors', {
  name: 'Allow duplicate selectors',
  code: `
      .foo,
      .bar,
      .foo {}
    `,
});
