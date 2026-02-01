import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'scss/at-function-pattern',
  {
    name: 'Require kebab-case for function names',
    code: `
      @function Foo-bar ();
      @function foo-Bar ();
      @function FOO-BAR ();
      @function Foo_bar ();
      @function foo_Bar ();
      @function FOO_BAR ();
      @function foo_bar ();
      @function Foobar ();
      @function FooBar ();
      @function fooBar ();
      @function _foo-bar ();
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
      ].map((name: string): string => `Expected function name "${name}" to be kebab-case`),
      severities: new Array(11).fill('error') as Severity[],
    },
  },
  {
    name: 'Require kebab-case for function names',
    code: `
      @function foo ();
      @function foo-bar ();
      @function foo1-bar-2 ();
      @function -foo-bar-baz ();
    `,
  },
);
