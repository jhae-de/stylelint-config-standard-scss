import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('scss/at-rule-conditional-no-parentheses', {
  name: 'Disallow parentheses in conditional at-rules',
  code: `
    test {
      @if ($x == 1) {}
      @else if ($x == 2) {}
      
      @while (true) {}
    }
  `,
  expect: {
    errored: true,
    messages: new Array(3).fill('Unexpected () used to surround statements for @-rules') as string[],
    severities: new Array(3).fill('error') as Severity[],
  },
});
