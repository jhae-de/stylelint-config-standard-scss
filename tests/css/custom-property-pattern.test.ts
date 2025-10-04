import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'custom-property-pattern',
  {
    name: 'Require kebab-case for custom property names',
    code: `
      :root {
        --Foo-bar: 10rem;
        --foo-Bar: 20rem;
        --FOO-BAR: 30rem;
        --Foo_bar: 40rem;
        --foo_Bar: 50rem;
        --FOO_BAR: 60rem;
        --foo_bar: 70rem;
        --Foobar: 80rem;
        --FooBar: 90rem;
        --fooBar: 100rem;
      }
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
      ].map((name: string): string => `Expected custom property name "${name}" to be kebab-case`),
      severities: new Array(10).fill('error') as Severity[],
    },
  },
  {
    name: 'Require kebab-case for custom property names',
    code: `
      :root {
        --foo: 10rem;
        --foo-bar: 20rem;
        --foo1-bar-2: 30rem;
      }
    `,
  },
);
