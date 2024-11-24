import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('color-function-notation', {
  name: 'Require modern notation for color-functions',
  code: `
    test { color: rgb(0, 0, 0); }
    test { color: rgba(32, 64, 128, 0.5); }
    test { color: hsla(180, 75%, 50%, 25%); }
    test { color: hsl(0.75turn, 50%, 75%); }
  `,
  expect: {
    errored: true,
    messages: new Array(4).fill('Expected modern color-function notation') as string[],
    severities: new Array(4).fill('error') as Severity[],
  },
});
