import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/at-function-named-arguments', {
  name: 'Ignore unnamed arguments in function calls',
  code: `
    test {
      animation: animation(250ms, 100ms, infinite);
      animation: animation(250ms);
      border: reset($value: 20, 'bar', $color: #FFFFFF);
      animation: animation($duration: 250ms, $delay: 100ms, $direction: infinite);
      animation: animation($duration: 250ms);
    }
  `,
});
