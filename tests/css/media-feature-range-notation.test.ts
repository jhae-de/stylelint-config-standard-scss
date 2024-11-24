import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('media-feature-range-notation', {
  name: 'Require context notation for media feature ranges',
  code: `
    @media (min-width: 1px) {}
    @media (min-width: 1px) and (max-width: 2px) {}
  `,
  expect: {
    errored: true,
    messages: new Array(3).fill('Expected "context" media feature range notation') as string[],
    severities: new Array(3).fill('error') as Severity[],
  },
});
