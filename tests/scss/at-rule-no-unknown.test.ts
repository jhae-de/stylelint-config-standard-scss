import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/at-rule-no-unknown',
  {
    name: 'Disallow unknown at-rules',
    code: '@unknown {}',
    expect: {
      errored: true,
      messages: ['Unexpected unknown at-rule "@unknown"'],
      severities: ['error'],
    },
  },
  {
    name: 'Allow unknown @tailwind at-rule',
    code: `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
    `,
  },
);
