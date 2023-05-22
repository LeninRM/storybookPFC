import customtheme from './customTheme';
import '../src/styles/styles.scss';

export const parameters = {
  docs: {
    theme: customtheme,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
