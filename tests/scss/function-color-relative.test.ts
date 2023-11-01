import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/function-color-relative',
  {
    name: 'Do not encourage the use of the scale-color',
    code: `
      test {
        color: saturate(black, 25%);
        color: desaturate(black, 25%);
        color: darken(black, 0.25);
        color: lighten(black, 0.25);
        color: opacify(black, 0.25);
        color: fade-in(black, 0.25);
        color: transparentize(black, 0.25);
        color: fade-out(black, 0.25);
      }
    `,
  },
  {
    name: 'Do not encourage the use of the scale-color',
    code: `
      test {
        color: scale-color(black, $alpha: -25%);
      }
    `,
  },
);
