import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('hue-degree-notation', {
  name: 'Require angle notation for degree hues',
  code: `
    test {
      background-color: hsl(180 25% 50%);
      color: lch(57.25% 18.25 10 / 25%);
    }
  `,
  expect: {
    errored: true,
    messages: ['Expected "180" to be "180deg"', 'Expected "10" to be "10deg"'],
    severities: new Array(2).fill('error') as Severity[],
  },
});
