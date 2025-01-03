import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'number-max-precision',
  {
    name: 'Limit the number of decimal places allowed in numbers',
    code: 'test { top: 0.06250rem; }',
    expect: {
      errored: true,
      messages: ['Expected "0.0625" to be "0.0625"'],
      severities: ['error'],
    },
  },
  {
    name: 'Limit the number of decimal places allowed in numbers',
    code: 'test { top: 0.06255rem; }',
    expect: {
      errored: true,
      messages: ['Expected "0.06255" to be "0.0625"'],
      severities: ['error'],
    },
  },
  {
    name: 'Limit the number of decimal places allowed in numbers',
    code: 'test { top: 0.0625rem; }',
  },
);
