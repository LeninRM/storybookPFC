import { inject, getCurrentInstance } from 'vue';

export const getDarkMode = (): object => {
  const componentName: string = getCurrentInstance()?.type.name || '';

  const darkMode = inject('darkMode');
  const isDarkClassName = `${getName(componentName)}--is-dark`;
  return {
    [isDarkClassName]: darkMode,
  };
};

const getName = (name: string): string => name?.toLowerCase().replace('on', '');
