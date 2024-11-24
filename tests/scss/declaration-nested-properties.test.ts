import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/declaration-nested-properties',
  {
    name: 'Ignore properties with - in their names to be in a form of a nested group',
    code: `
      test {
        margin-left: 10px;
      }
    `,
  },
  {
    name: 'Ignore properties with - in their names to be in a form of a nested group',
    code: `
      test {
        font: {
          size: 10px;
        }
        font-weight: 400;
      }
    `,
  },
  {
    name: 'Ignore properties with - in their names to be in a form of a nested group',
    code: `
      test {
        margin: {
          left: 10px;
        }
      }
    `,
  },
  {
    name: 'Ignore properties with - in their names to be in a form of a nested group',
    code: `
      test {
        background: black {
          repeat: no-repeat;
        }
      }
    `,
  },
);
