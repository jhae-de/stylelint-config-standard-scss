import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify('scss/declaration-nested-properties-no-divided-groups', {
  name: 'Disallow nested properties of the same "namespace" be divided into multiple groups',
  code: `
    // This should report an error, but it doesn't.
    // test {
    //   background: url(img.png) center {
    //     size: auto;
    //   }
    //   background: {
    //     repeat: no-repeat;
    //   }
    // }
    test {
      background: {
        size: auto;
      }
      background: {
        repeat: no-repeat;
      }
    }
  `,
  expect: {
    errored: true,
    messages: new Array(2).fill(
      'Expected all nested properties of "background" namespace to be in one nested group',
    ) as string[],
    severities: new Array(2).fill('error') as Severity[],
  },
});
