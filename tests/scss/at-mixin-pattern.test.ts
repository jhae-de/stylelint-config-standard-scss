import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'scss/at-mixin-pattern',
  {
    name: 'Require kebab-case for mixin names',
    code: `
      @mixin Foo-bar ();
      @mixin foo-Bar ();
      @mixin FOO-BAR ();
      @mixin Foo_bar ();
      @mixin foo_Bar ();
      @mixin FOO_BAR ();
      @mixin foo_bar ();
      @mixin Foobar ();
      @mixin FooBar ();
      @mixin fooBar ();
      @mixin _foo-bar ();
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
        'Foobar',
        'FooBar',
        'fooBar',
        '_foo-bar',
      ].map((name: string): string => `Expected mixin name "${name}" to be kebab-case`),
      severities: new Array(11).fill('error') as Severity[],
    },
  },
  {
    name: 'Require kebab-case for mixin names',
    code: `
      @mixin foo ();
      @mixin foo-bar ();
      @mixin foo1-bar-2 ();
      @mixin -foo-bar-baz ();
    `,
  },
);
