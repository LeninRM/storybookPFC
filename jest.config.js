const config = {
  verbose: true,
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: [
    '**/components/**/*.spec.[jt]s?(x)',
    '**/utils/**/*.spec.[jt]s?(x)',
  ],
};

module.exports = config;
