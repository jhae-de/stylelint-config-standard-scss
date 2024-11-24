import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'selector-type-case',
  {
    name: 'Allow only lowercase type selectors',
    code: 'Body {}',
    expect: {
      errored: true,
      messages: ['Expected "Body" to be "body"'],
      severities: ['error'],
    },
  },
  {
    name: 'Allow only lowercase type selectors',
    code: 'bOdY {}',
    expect: {
      errored: true,
      messages: ['Expected "bOdY" to be "body"'],
      severities: ['error'],
    },
  },
  {
    name: 'Allow only lowercase type selectors',
    code: 'BODY {}',
    expect: {
      errored: true,
      messages: ['Expected "BODY" to be "body"'],
      severities: ['error'],
    },
  },
);
