import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('media-feature-name-no-unknown', {
  name: 'Disallow unknown media feature names',
  code: `
    @media screen and (unknown) {}
    @media screen and (unknown: 10px) {}
    @media screen and (unknown > 10px) {}
  `,
  expect: {
    errored: true,
    messages: new Array(3).fill('Unexpected unknown media feature name "unknown"') as string[],
    severities: new Array(3).fill('error') as Severity[],
  },
});
