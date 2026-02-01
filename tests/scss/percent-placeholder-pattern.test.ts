import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'scss/percent-placeholder-pattern',
  {
    name: 'Require kebab-case for placeholder names',
    code: `
      %Foo-bar {};
      %foo-Bar {};
      %FOO-BAR {};
      %Foo_bar {};
      %foo_Bar {};
      %FOO_BAR {};
      %foo_bar {};
      %Foobar {};
      %FooBar {};
      %fooBar {};
      %_foo-bar {};
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
      ].map((name: string): string => `Expected placeholder name "${name}" to be kebab-case`),
      severities: new Array(11).fill('error') as Severity[],
    },
  },
  {
    name: 'Require kebab-case for placeholder names',
    code: `
      %foo {};
      %foo-bar {};
      %foo1-bar-2 {};
      %-foo-bar-baz {};
    `,
  },
);
