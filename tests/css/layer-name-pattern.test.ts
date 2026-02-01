import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'layer-name-pattern',
  {
    name: 'Require kebab-case for layer names',
    code: `
      @layer Foo-bar;
      @layer foo-Bar;
      @layer FOO-BAR;
      @layer Foo_bar;
      @layer foo_Bar;
      @layer FOO_BAR;
      @layer foo_bar;
      @layer Foo.bar;
      @layer foo.Bar;
      @layer Foobar;
      @layer FooBar;
      @layer fooBar;
    `,
    expect: {
      errored: true,
      messages: [
        'Foo-bar',
        'foo-Bar',
        'FOO-BAR',
        'Foo_bar',
        'foo_Bar',
        'FOO_BAR',
        'foo_bar',
        'Foo.bar',
        'foo.Bar',
        'Foobar',
        'FooBar',
        'fooBar',
      ].map((name: string): string => `Expected layer name "${name}" to be kebab-case`),
      severities: new Array(12).fill('error') as Severity[],
    },
  },
  {
    name: 'Require kebab-case for layer names',
    code: `
      @layer foo;
      @layer foo-bar;
      @layer foo1-bar-2;
      @layer foo1.bar-2;
    `,
  },
);
