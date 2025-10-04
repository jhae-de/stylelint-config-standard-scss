import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'custom-media-pattern',
  {
    name: 'Require kebab-case for custom media query names',
    code: `
      @custom-media --Foo-bar (min-width: 10rem);
      @custom-media --foo-Bar (min-width: 20rem);
      @custom-media --FOO-BAR (min-width: 30rem);
      @custom-media --Foo_bar (min-width: 40rem);
      @custom-media --foo_Bar (min-width: 50rem);
      @custom-media --FOO_BAR (min-width: 60rem);
      @custom-media --foo_bar (min-width: 70rem);
      @custom-media --Foobar (min-width: 80rem);
      @custom-media --FooBar (min-width: 90rem);
      @custom-media --fooBar (min-width: 100rem);
    `,
    expect: {
      errored: true,
      messages: [
        '--Foo-bar',
        '--foo-Bar',
        '--FOO-BAR',
        '--Foo_bar',
        '--foo_Bar',
        '--FOO_BAR',
        '--foo_bar',
        '--Foobar',
        '--FooBar',
        '--fooBar',
      ].map((name: string): string => `Expected custom media query name "${name}" to be kebab-case`),
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
