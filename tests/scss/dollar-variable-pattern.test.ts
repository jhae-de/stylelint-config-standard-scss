import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'scss/dollar-variable-pattern',
  {
    name: 'Require kebab-case for variable names',
    code: `
      $Foo-bar: 1;
      $foo-Bar: 2;
      $FOO-BAR: 3;
      $Foo_bar: 4;
      $foo_Bar: 5;
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
