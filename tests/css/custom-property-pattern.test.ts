import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'custom-property-pattern',
  {
    name: 'Require kebab-case for custom property names',
    code: `
      :root {
        --FOO-bar: 10rem;
        --foo-BAR: 20rem;
        --FOO-BAR: 30rem;
        --FOO_bar: 40rem;
        --foo_BAR: 50rem;
        --FOO_BAR: 60rem;
        --foo_bar: 70rem;
        --Foobar: 80rem;
        --FooBar: 90rem;
        --fooBar: 100rem;
      }
    `,
    expect: {
      errored: true,
      messages: new Array(10).fill('Expected custom property name to be kebab-case') as string[],
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
