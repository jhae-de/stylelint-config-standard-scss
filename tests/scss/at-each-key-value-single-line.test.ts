import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/at-each-key-value-single-line',
  {
    name: 'Ignore "@each $key in map-keys($map)" with "map-get($map, $key)"',
    code: `
      @each $key in map-keys($map) {
        $value: map-get($map, $key);
      }
    `,
  },
  {
    name: 'Ignore "@each $key in map.keys($map)" with "map.get($map, $key)"',
    code: `
      @each $key in map.keys($map) {
        $value: map.get($map, $key);
      }
    `,
  },
);
