import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'no-unknown-animations',
  {
    name: 'Allow unknown animations',
    code: 'test { animation-name: fancy-slide; }',
  },
  {
    name: 'Allow unknown animations',
    code: 'test { animation: fancy-slide 2s linear; }',
  },
  {
    name: 'Allow unknown animations',
    code: `
      test { animation-name: fancccy-slide; }
      @keyframes fancy-slide {}
    `,
  },
  {
    name: 'Allow unknown animations',
    code: `
      test { animation: linear 100ms fancccy-slide; }
      @keyframes fancy-slide {}
    `,
  },
  {
    name: 'Allow unknown animations',
    code: `
      test { animation-name: jump; }
      @keyframes fancy-slide {}
    `,
  },
);
