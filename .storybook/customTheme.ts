import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#9394a5',
  colorSecondary: '#484b6a',

  appBg: '#d2d3db',
  appContentBg: '#fafafa',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  textColor: 'black',
  textInverseColor: '#fafafa',

  barTextColor: '#9394a5',
  barSelectedColor: '#484b6a',
  barBg: '#e4e5f1',

  inputBg: 'white',
  inputBorder: '#d2d3db',
  inputTextColor: 'black',
  inputBorderRadius: 6,

  brandTitle: 'Onestic',
  brandUrl: 'https://example.com',
  brandImage: 'https://onestic.com/wp-content/themes/onestic/img/logo.svg',
  brandTarget: '_self',
});
