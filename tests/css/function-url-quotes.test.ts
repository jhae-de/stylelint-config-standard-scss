import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('function-url-quotes', {
  name: 'Require quotes for urls',
  code: `
    @import url(test.css);
    @font-face { font-family: 'test'; src: url(test.ttf); }
  `,
  expect: {
    errored: true,
    messages: new Array(2).fill('Expected quotes around "url" function argument') as string[],
    severities: new Array(2).fill('error') as Severity[],
  },
});
