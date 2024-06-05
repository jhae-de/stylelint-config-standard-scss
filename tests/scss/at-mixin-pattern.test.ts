import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/at-mixin-pattern',
  {
    name: 'Require kebab-case for mixin names',
    code: `
      @mixin FOO-bar ();
      @mixin foo-BAR ();
      @mixin FOO-BAR ();
      @mixin FOO_bar ();
      @mixin foo_BAR ();
      @mixin FOO_BAR ();
      @mixin foo_bar ();
      @mixin Foobar ();
      @mixin FooBar ();
      @mixin fooBar ();
      @mixin _foo-bar ();
    `,
    expect: {
      errored: true,
      messages: new Array(11).fill('Expected mixin name to be kebab-case') as string[],
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
