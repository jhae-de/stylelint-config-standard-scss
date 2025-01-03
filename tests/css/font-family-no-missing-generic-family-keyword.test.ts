import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('font-family-no-missing-generic-family-keyword', {
  name: 'Disallow a missing generic family keyword within font families',
  code: `
    test { font-family: Helvetica, Arial, Verdana, Tahoma; }
    test { font: 1em/1.3 Times; }
  `,
  expect: {
    errored: true,
    messages: new Array(2).fill('Unexpected missing generic font family') as string[],
    severities: new Array(2).fill('error') as Severity[],
  },
});
