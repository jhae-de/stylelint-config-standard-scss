import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('scss/at-mixin-named-arguments', {
  name: 'Ignore named arguments in mixin calls',
  code: `
    test {
      @include animation(250ms, 100ms, infinite);
      @include animation(250ms);
      @include reset($value: 20, 'bar', $color: #FFFFFF);
      @include animation($duration: 250ms, $delay: 100ms, $direction: infinite);
      @include animation($duration: 250ms);
    }
  `,
});
