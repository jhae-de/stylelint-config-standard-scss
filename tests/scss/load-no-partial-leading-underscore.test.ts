import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('scss/load-no-partial-leading-underscore', {
  name: 'Disallow leading underscore in partial names',
  code: `
    @import "_test";
    @import "path/_test";
    @forward "path\\_test";
    @use "path/test", "_test.scss";
    @include meta.load-css("_test", $with: ("border-contrast": true));
  `,
  expect: {
    errored: true,
    messages: new Array(5).fill('Unexpected leading underscore in imported partial name') as string[],
    severities: new Array(5).fill('error') as Severity[],
  },
});
