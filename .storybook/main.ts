module.exports = {
  stories: [
    {
      directory: '../src/components/atoms/*',
      titlePrefix: 'Atoms',
      files: '*.stories.@(js|jsx|ts|tsx)*',
    },
    {
      directory: '../src/components/molecules/*',
      titlePrefix: 'Molecules',
      files: '*.stories.@(js|jsx|ts|tsx)*',
    },
    {
      directory: '../src/components/organisms/*',
      titlePrefix: 'Organisms',
      files: '*.stories.@(js|jsx|ts|tsx)*',
    },
    {
      directory: '../src/components/templates/*',
      titlePrefix: 'Template',
      files: '*.stories.@(js|jsx|ts|tsx)*',
    },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
};
