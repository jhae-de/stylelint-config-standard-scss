import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'no-duplicate-at-import-rules',
  {
    name: 'Disallow duplicate @import rules',
    code: `
      @import 'a.css';
      @import 'a.css';
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate @import rule a.css'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate @import rules',
    code: `
      @import url("a.css");
      @import url("a.css");
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate @import rule a.css'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate @import rules',
    code: `
      @import "a.css";
      @import 'a.css';
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate @import rule a.css'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate @import rules',
    code: `
      @import "a.css";
      @import 'b.css';
      @import url(a.css);
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate @import rule a.css'],
      severities: ['error'],
    },
  },
);
