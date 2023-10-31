import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'selector-class-pattern',
  {
    name: 'Require kebab-case for class selectors',
    code: `
      .FOO-bar {};
      .foo-BAR {};
      .FOO-BAR {};
      .FOO_bar {};
      .foo_BAR {};
      .FOO_BAR {};
      .foo_bar {};
      .Foobar {};
      .FooBar {};
      .fooBar {};
      div > #test + .fooBar {};
    `,
    expect: {
      errored: true,
      messages: new Array(11).fill('Expected class selector to be kebab-case'),
      severities: new Array(11).fill('error'),
    },
  },
  {
    name: 'Require kebab-case for class selectors',
    code: `
      .foo {};
      .foo-bar {};
      .foo1-bar-2 {};
      div > #test + .foo-bar {};
    `,
  },
);
