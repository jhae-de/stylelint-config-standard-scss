import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'container-name-pattern',
  {
    name: 'Require kebab-case for container names',
    code: `
      test {
        container-name: Foo-bar;
        container-name: foo-Bar;
        container-name: FOO-BAR;
        container-name: Foo_bar;
        container-name: foo_Bar;
        container-name: FOO_BAR;
        container-name: foo_bar;
        container-name: Foobar;
        container-name: FooBar;
        container-name: fooBar;
        
        container-name: --Foo-bar;
        container-name: --foo-Bar;
        container-name: --FOO-BAR;
        container-name: --Foo_bar;
        container-name: --foo_Bar;
        container-name: --FOO_BAR;
        container-name: --foo_bar;
        container-name: --Foobar;
        container-name: --FooBar;
        container-name: --fooBar;
      }
    `,
    expect: {
      errored: true,
      messages: new Array(20).fill('Expected container name to be kebab-case') as string[],
      severities: new Array(20).fill('error') as Severity[],
    },
  },
  {
    name: 'Require kebab-case for container names',
    code: `
      test {
        container-name: foo;
        container-name: foo-bar;
        container-name: foo1-bar-2;
        
        container-name: --foo;
        container-name: --foo-bar;
        container-name: --foo1-bar-2;
      }
    `,
  },
);
