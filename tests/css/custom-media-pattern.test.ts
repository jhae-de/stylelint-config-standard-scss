import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'custom-media-pattern',
  {
    name: 'Require kebab-case for custom media query names',
    code: `
      @custom-media --FOO-bar (min-width: 10rem);
      @custom-media --foo-BAR (min-width: 20rem);
      @custom-media --FOO-BAR (min-width: 30rem);
      @custom-media --FOO_bar (min-width: 40rem);
      @custom-media --foo_BAR (min-width: 50rem);
      @custom-media --FOO_BAR (min-width: 60rem);
      @custom-media --foo_bar (min-width: 70rem);
      @custom-media --Foobar (min-width: 80rem);
      @custom-media --FooBar (min-width: 90rem);
      @custom-media --fooBar (min-width: 100rem);
    `,
    expect: {
      errored: true,
      messages: new Array(10).fill('Expected custom media query name to be kebab-case') as string[],
      severities: new Array(10).fill('error') as Severity[],
    },
  },
  {
    name: 'Require kebab-case for custom media query names',
    code: `
      @custom-media --foo (min-width: 10rem);
      @custom-media --foo-bar (min-width: 20rem);
      @custom-media --foo1-bar-2 (min-width: 30rem);
    `,
  },
);
