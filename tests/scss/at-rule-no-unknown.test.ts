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
    name: 'Allow Tailwind CSS at-rules',
    code: `
      @config "./tailwind.config.ts";
      
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      
      @layer base {
        test {
          @apply bg-white text-black;
        }
      }
      
      @responsive {}
      @screen sm {}
      @variants hover {}
    `,
  },
);
