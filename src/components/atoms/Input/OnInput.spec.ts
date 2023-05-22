import { VueWrapper, mount } from '@vue/test-utils';
import OnInput from './OnInput.vue';

describe('Testing OnInput component', () => {
  let wrapper: VueWrapper<any>;

  const props = {
    label: 'Hello',
    hint: 'I am a test',
    status: '',
  };

  beforeEach(() => {
    wrapper = mount(OnInput, {
      props,
      global: {
        provide: {
          darkMode: 'darkMode',
        },
      },
    });
  });

  it('Rendering Input with label', () => {
    expect(wrapper.vm.label).toBe(props.label);
  });

  it('Rendering Input with hint', () => {
    expect(wrapper.vm.hint).toBe(props.hint);
  });

  it('Testing status', () => {
    expect(wrapper.vm.status).toBe(props.status);
  });

  it('Testing classes', () => {
    expect(wrapper.vm.classes).toEqual({
      'input--error': false,
      'input--focus': false,
      'input--disabled': false,
    });
  });

  it('Input change test', () => {
    wrapper.vm.inputChange();
    expect(wrapper.emitted('input:change')).toBeTruthy();
  });

  it('Input change value', async () => {
    const input = wrapper.find('input');
    await input.setValue('test');
    expect(input.element.value).toBe('test');
  });

  it('Dark mode provide test', () => {
    expect(wrapper.vm.isDarkClass).toEqual({ 'input--is-dark': 'darkMode' });
  });
});
