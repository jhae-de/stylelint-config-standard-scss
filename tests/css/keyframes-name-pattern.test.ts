import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
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
      messages: new Array(10).fill('Expected keyframe name to be kebab-case') as string[],
      severities: new Array(10).fill('error') as Severity[],
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
