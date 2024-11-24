import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'named-grid-areas-no-invalid',
  {
    name: 'Disallow invalid named grid areas',
    code: 'a { grid-template-areas: "" }',
    expect: {
      errored: true,
      messages: ['Expected cell token within string'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow invalid named grid areas',
    code: `
      a {
        grid-template-areas: "a a a"
                             "b b b b";
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected same number of cell tokens in each string'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow invalid named grid areas',
    code: `
      a {
        grid-template-areas: "a a a"
                             "b b a";
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected single filled-in rectangle for "a"'],
      severities: ['error'],
    },
  },
);
