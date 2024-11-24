import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/media-feature-value-dollar-variable',
  {
    name: 'Ignore a media feature value be a $-variable',
    code: `
      @media (min-width: 768px) {
        test { color: black; }
      }
    `,
  },
  {
    name: 'Ignore a media feature value be a $-variable',
    code: `
      @media (min-width: $test) {
        test { color: black; }
      }
    `,
  },
);
