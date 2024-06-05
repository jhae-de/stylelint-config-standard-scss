import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/percent-placeholder-pattern',
  {
    name: 'Require kebab-case for placeholder names',
    code: `
      %FOO-bar {};
      %foo-BAR {};
      %FOO-BAR {};
      %FOO_bar {};
      %foo_BAR {};
      %FOO_BAR {};
      %foo_bar {};
      %Foobar {};
      %FooBar {};
      %fooBar {};
      %_foo-bar {};
    `,
    expect: {
      errored: true,
      messages: new Array(11).fill('Expected placeholder name to be kebab-case') as string[],
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
