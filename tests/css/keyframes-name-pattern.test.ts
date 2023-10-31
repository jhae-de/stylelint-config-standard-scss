import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'keyframes-name-pattern',
  {
    name: 'Require kebab-case for keyframe names',
    code: `
      @keyframes FOO-bar {};
      @keyframes foo-BAR {};
      @keyframes FOO-BAR {};
      @keyframes FOO_bar {};
      @keyframes foo_BAR {};
      @keyframes FOO_BAR {};
      @keyframes foo_bar {};
      @keyframes Foobar {};
      @keyframes FooBar {};
      @keyframes fooBar {};
    `,
    expect: {
      errored: true,
      messages: new Array(10).fill('Expected keyframe name to be kebab-case'),
      severities: new Array(10).fill('error'),
    },
  },
  {
    name: 'Require kebab-case for keyframe names',
    code: `
      @keyframes foo {};
      @keyframes foo-bar {};
      @keyframes foo1-bar-2 {};
    `,
  },
);
