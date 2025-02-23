import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/no-duplicate-load-rules', {
  name: 'Allow duplicate @import, @use and @forward rules',
  code: `
    @import "test.css";
    @import "test.css";
    
    @use "test.scss";
    @use "test.scss";
    
    @forward "test.scss";
    @forward "test.scss";
  `,
});
