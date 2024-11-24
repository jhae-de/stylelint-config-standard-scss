import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('scss/at-else-if-parentheses-space-before', {
  name: 'Require a space before @else if parentheses',
  code: `
    test {
      @if ($x == 1) {}
      @else if($x == 2) {}
      @else if  ($x == 3) {}
      @else {}
    }
  `,
  expect: {
    errored: true,
    messages: new Array(2).fill('Expected a single space before parentheses in else-if declaration') as string[],
    severities: new Array(2).fill('error') as Severity[],
  },
});
