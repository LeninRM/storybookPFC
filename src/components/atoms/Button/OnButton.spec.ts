import { mount, VueWrapper } from '@vue/test-utils';
import OnButton from './OnButton.vue';

describe('Testing OnButton component', () => {
  let wrapper: VueWrapper<any>;

  const props = {
    label: 'new message',
    rounded: true,
    disabled: false,
    fullWidth: false,
  };

  beforeEach(() => {
    wrapper = mount(OnButton, {
      props,
      global: {
        provide: {
          darkMode: 'darkMode',
        },
      },
    });
  });

  it('Rendering button with label', () => {
    expect(wrapper.text()).toBe(props.label);
  });

  it('Rendering disabled button', () => {
    expect(wrapper.vm.disabled).toBeFalsy();
  });

  it('Rendering button with full width', () => {
    expect(wrapper.vm.fullWidth).toBeFalsy();
  });

  it('Testing classes', () => {
    expect(wrapper.vm.classes).toEqual({
      'button--rounded': true,
      'button--full-width': false,
      'button--disabled': false,
    });
  });

  it('Button onClick test', () => {
    wrapper.vm.onClick();
    expect(wrapper.emitted('button:click')).toBeTruthy();
  });

  it('Button click test', () => {
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('button:click');
  });

  it('Dark mode provide test', () => {
    expect(wrapper.vm.isDarkClass).toEqual({ 'button--is-dark': 'darkMode' });
  });
});
