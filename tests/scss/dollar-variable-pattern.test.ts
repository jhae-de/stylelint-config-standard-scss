import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/dollar-variable-pattern',
  {
    name: 'Require kebab-case for variable names',
    code: `
      $FOO-bar: 1;
      $foo-BAR: 2;
      $FOO-BAR: 3;
      $FOO_bar: 4;
      $foo_BAR: 5;
      $FOO_BAR: 6;
      $foo_bar: 7;
      $Foobar: 8;
      $FooBar: 9;
      $fooBar: 10;
      $_foo-bar: 11;
    `,
    expect: {
      errored: true,
      messages: new Array(11).fill('Expected variable name to be kebab-case') as string[],
      severities: new Array(11).fill('error') as Severity[],
    },
  },
  {
    name: 'Require kebab-case for variable names',
    code: `
      $foo: 1;
      $foo-bar: 2;
      $foo1-bar-2: 3;
      $-foo-bar-baz: 4;
    `,
  },
);
