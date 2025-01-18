import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'font-family-no-duplicate-names',
  {
    name: 'Disallow duplicate names within font families',
    code: 'test { font-family: "Times", Times, serif; }',
    expect: {
      errored: true,
      messages: ['Unexpected duplicate font-family name Times'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate names within font families',
    code: `test { font: 1em "Arial", 'Arial', sans-serif; }`,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate font-family name Arial'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate names within font families',
    code: 'test { font: normal 16px/32px -apple-system, BlinkMacSystemFont, sans-serif, sans-serif; }',
    expect: {
      errored: true,
      messages: ['Unexpected duplicate font-family name sans-serif'],
      severities: ['error'],
    },
  },
);
