import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('media-feature-name-no-vendor-prefix', {
  name: 'Disallow vendor prefixes for media feature names',
  code: `
    @media (-webkit-min-device-pixel-ratio: 1) {}
    @media (min--mox-device-pixel-ratio: 1) {}
    @media (-o-max-device-pixel-ratio: 1/1) {}
  `,
  expect: {
    errored: true,
    messages: new Array(3).fill('Unexpected vendor-prefix') as string[],
    severities: new Array(3).fill('error') as Severity[],
  },
});
