import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'selector-id-pattern',
  {
    name: 'Require kebab-case for id selectors',
    code: `
      #Foo-bar {};
      #foo-Bar {};
      #FOO-BAR {};
      #Foo_bar {};
      #foo_Bar {};
      #FOO_BAR {};
      #foo_bar {};
      #Foobar {};
      #FooBar {};
      #fooBar {};
    `,
    expect: {
      errored: true,
      messages: new Array(10).fill('Expected id selector to be kebab-case') as string[],
      severities: new Array(10).fill('error') as Severity[],
    },
  },
  {
    name: 'Require kebab-case for id selectors',
    code: `
      #foo {};
      #foo-bar {};
      #foo1-bar-2 {};
    `,
  },
);
