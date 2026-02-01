import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'scss/selector-class-pattern',
  {
    name: 'Require kebab-case for class names',
    code: `
      .Foo-bar {};
      .foo-Bar {};
      .FOO-BAR {};
      .Foo_bar {};
      .foo_Bar {};
      .FOO_BAR {};
      .foo_bar {};
      .Foobar {};
      .FooBar {};
      .fooBar {};
      .-foo-bar {};
      ._foo-bar {};
      .foo {
        &-Bar {}
        &-BAR {}
      };
      .foo-bar {
        &-Baz {}
        &-BAZ {}
      };
    `,
    expect: {
      errored: true,
      messages: new Array(16).fill('Expected class name to be kebab-case') as string[],
      severities: new Array(16).fill('error') as Severity[],
    },
  },
  {
    name: 'Require kebab-case for class names',
    code: `
      .foo {};
      .foo-bar {};
      .foo-bar {
        &-baz-1 {}
        &-baz-2 {}
      };
      .foo1-bar-2 {};
      .foo-bar-baz {};
    `,
  },
);
