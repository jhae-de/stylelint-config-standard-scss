import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('keyframe-declaration-no-important', {
  name: 'Disallow invalid !important within keyframe declarations',
  code: `
      @keyframes foo {
        from {
          opacity: 0;
        }
        to {
          opacity: 1 !important;
        }
      }
    `,
  expect: {
    errored: true,
    messages: ['Unexpected !important'],
    severities: ['error'],
  },
});
