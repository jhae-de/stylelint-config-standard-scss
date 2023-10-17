import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/at-each-key-value-single-line',
  {
    name: 'rejects "@each $key in map-keys($var)" with "map-get($var, $key)"',
    code: `
      @each $key in map-keys($var) {
        $value: map-get($var, $key);
      }
    `,
    expect: {
      errored: true,
      messages: ['Use @each $key, $value in $map syntax instead of $value: map-get($map, $key)'],
      severities: ['error'],
    },
  },
  {
    name: 'rejects "@each $key in map.keys($var)" with "map.get($var, $key)"',
    code: `
      @each $key in map.keys($var) {
        $value: map.get($var, $key);
      }
    `,
    expect: {
      errored: true,
      messages: ['Use @each $key, $value in $map syntax instead of $value: map-get($map, $key)'],
      severities: ['error'],
    },
  },
  {
    name: 'accepts "@each $key, $value in $var"',
    code: '@each $key, $value in $var {}',
  },
  {
    name: 'accepts "@each $key, $value in map-keys($var)" with "map-get($anotherVar)"',
    code: `
      @each $key, $value in map-keys($var) {
        $value: map-get($anotherVar, $key);
      }
    `,
  },
  {
    name: 'accepts "@each $key, $value in map.keys($var)" with "map.get($anotherVar)"',
    code: `
      @each $key, $value in map.keys($var) {
        $value: map.get($anotherVar, $key);
      }
    `,
  },
  {
    name: 'accepts "@each $key, $value in map-keys($var)"',
    code: '@each $key, $value in map-keys($var) {}',
  },
  {
    name: 'accepts "@each $key, $value in map.keys($var)"',
    code: '@each $key, $value in map.keys($var) {}',
  },
);
