import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('declaration-block-no-redundant-longhand-properties', {
  name: 'Disallow redundant longhand properties within declaration-block',
  code: `
    test {
      margin-top: 1px;
      margin-right: 2px;
      margin-bottom: 3px;
      margin-left: 4px;
      
      -webkit-transition-property: top;
      -webkit-transition-duration: 2s;
      -webkit-transition-timing-function: ease;
      -webkit-transition-delay: 0.5s;
    }
  `,
  expect: {
    errored: true,
    messages: ['Expected shorthand property "margin"', 'Expected shorthand property "-webkit-transition"'],
    severities: new Array(2).fill('error') as Severity[],
  },
});
