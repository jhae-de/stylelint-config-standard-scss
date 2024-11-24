import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/map-keys-quotes', {
  name: 'Do not require quoted keys in Sass maps',
  code: '$test: (Helvetica: 16px, Arial: 32px);',
});
