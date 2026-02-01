import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

// This rule is disabled in the stylelint-config-recommended-scss config.

new ConfigVerifier('index.yaml').verify('no-descending-specificity', {
  name: 'Allow selectors of lower specificity from coming after overriding selectors of higher specificity',
  code: `
      b a { color: black; }
      a { color: white; }
    `,
});
