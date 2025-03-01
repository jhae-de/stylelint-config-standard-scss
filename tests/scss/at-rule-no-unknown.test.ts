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
      @plugin "@tailwindcss/typography";
      @reference "tailwindcss";
      @responsive {}
      @screen sm {}
      @source "./node_modules/@company/lib";
      @tailwind base;
      @theme {}
      @utility util {}
      @variant dark {}
      @custom-variant pointer-coarse (@media (pointer: coarse));
      @variants hover {}
      
      test {
        @apply bg-white text-black;
      }
    `,
  },
);
