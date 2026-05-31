import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

// This rule is only appropriate for CSS. It should not be turned on for CSS-like languages, such as SCSS or Less.

new ConfigVerifier('index.yaml').verify('selector-no-invalid', {
  name: 'Allow invalid selectors',
  code: ':dir(test) {}',
});
