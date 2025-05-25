import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import type { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('keyframe-block-no-duplicate-selectors', {
  name: 'Disallow duplicate selectors within keyframe blocks',
  code: `
    @keyframes foo {
      0% {}
      0% {}
    }
    
    @keyframes bar {
      from {}
      from {}
    }
    
    @keyframes baz {
      from {}
      FROM {}
    }
  `,
  expect: {
    errored: true,
    messages: ['Unexpected duplicate "0%"', 'Unexpected duplicate "from"', 'Unexpected duplicate "FROM"'],
    severities: new Array(3).fill('error') as Severity[],
  },
});
