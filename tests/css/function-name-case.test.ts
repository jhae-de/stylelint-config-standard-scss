import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'function-name-case',
  {
    name: 'Allow only lowercase function names',
    code: `
      test { width: Calc(5% - 10em); }
      test { width: cAlC(5% - 10em); }
      test { width: CALC(5% - 10em); }
      test { background: -WEBKIT-RADIAL-GRADIENT(red, green, blue); }
    `,
    expect: {
      errored: true,
      messages: [
        'Expected "Calc" to be "calc"',
        'Expected "cAlC" to be "calc"',
        'Expected "CALC" to be "calc"',
        'Expected "-WEBKIT-RADIAL-GRADIENT" to be "-webkit-radial-gradient"',
      ],
      severities: ['error', 'error', 'error', 'error'],
    },
  },
  {
    name: 'Allow only lowercase function names',
    code: 'test { transform: translateX(0); }',
  },
);
