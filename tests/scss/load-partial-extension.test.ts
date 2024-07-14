import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/load-partial-extension',
  {
    name: 'Disallow extension in @import commands',
    code: `
      @import "test.scss";
      @import "path/test.scss";
      @import "path\\test.scss";
      @import "path/test", "test.scss";
    `,
    expect: {
      errored: true,
      messages: new Array(4).fill('Unexpected extension ".scss" in @import') as string[],
      severities: new Array(4).fill('error') as Severity[],
    },
  },
  {
    name: 'Disallow extension in @use commands',
    code: `
      @use "test.scss";
      @use "path/test.scss";
      @use "path\\test.scss";
      @use "path/test", "test.scss";
    `,
    expect: {
      errored: true,
      messages: new Array(4).fill('Unexpected extension ".scss" in @use') as string[],
      severities: new Array(4).fill('error') as Severity[],
    },
  },
  {
    name: 'Disallow extension in @forward commands',
    code: `
      @forward "test.scss";
      @forward "path/test.scss";
      @forward "path\\test.scss";
      @forward "path/test", "test.scss";
    `,
    expect: {
      errored: true,
      messages: new Array(4).fill('Unexpected extension ".scss" in @forward') as string[],
      severities: new Array(4).fill('error') as Severity[],
    },
  },
  {
    name: 'Disallow extension in @meta.load-css commands',
    code: `
      @use "sass:meta";
      
      test {
        @include meta.load-css("test.scss");
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected extension ".scss" in @meta.load-css'],
      severities: ['error'],
    },
  },
);
