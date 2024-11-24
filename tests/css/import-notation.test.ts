import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('import-notation', {
  name: 'Require string notation for @import rules',
  code: `@import url('test-1.css');`,
  expect: {
    errored: true,
    messages: [`Expected "url('test-1.css')" to be "'test-1.css'"`],
    severities: ['error'],
  },
});
