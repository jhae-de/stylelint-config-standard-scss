import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('selector-attribute-quotes', {
  name: 'Require quotes for attribute values',
  code: `
    [title=test] {}
    [class^=test] {}
  `,
  expect: {
    errored: true,
    messages: new Array(2).fill('Expected quotes around "test"') as string[],
    severities: new Array(2).fill('error') as Severity[],
  },
});
