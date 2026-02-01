import { createDefaultEsmPreset } from 'ts-jest';

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  ...createDefaultEsmPreset({
    tsconfig: {
      isolatedModules: true,
    },
  }),
};

export default config;
