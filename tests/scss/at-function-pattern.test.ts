import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/at-function-pattern',
  {
    name: 'Require kebab-case for function names',
    code: `
      @function FOO-bar ();
      @function foo-BAR ();
      @function FOO-BAR ();
      @function FOO_bar ();
      @function foo_BAR ();
      @function FOO_BAR ();
      @function foo_bar ();
      @function Foobar ();
      @function FooBar ();
      @function fooBar ();
      @function _foo-bar ();
    `,
    expect: {
      errored: true,
      messages: new Array(11).fill('Expected function name to be kebab-case') as string[],
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
