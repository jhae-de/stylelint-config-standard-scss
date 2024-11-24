import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'selector-id-pattern',
  {
    name: 'Require kebab-case for id selectors',
    code: `
      #FOO-bar {};
      #foo-BAR {};
      #FOO-BAR {};
      #FOO_bar {};
      #foo_BAR {};
      #FOO_BAR {};
      #foo_bar {};
      #Foobar {};
      #FooBar {};
      #fooBar {};
      div > .test + #fooBar {};
    `,
    expect: {
      errored: true,
      messages: new Array(11).fill('Expected id selector to be kebab-case') as string[],
      severities: new Array(11).fill('error') as Severity[],
    },
  },
  {
    name: 'Require kebab-case for id selectors',
    code: `
      #foo {};
      #foo-bar {};
      #foo1-bar-2 {};
      div > .test + #foo-bar {};
    `,
  },
);
