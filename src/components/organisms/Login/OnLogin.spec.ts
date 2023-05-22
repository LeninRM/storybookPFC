import { VueWrapper, mount } from '@vue/test-utils';
import OnLogin from './OnLogin.vue';

describe('Testing OnLogin component', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(OnLogin, {
      global: {
        provide: {
          darkMode: 'darkMode',
        },
      },
    });
  });

  it('Changes on username input', () => {
    wrapper.vm.onUsernameChange();
    expect(wrapper.emitted('login:username:change')).toBeTruthy();
  });

  it('Changes on password input', () => {
    wrapper.vm.onPasswordChange();
    expect(wrapper.emitted('login:password:change')).toBeTruthy();
  });

  it('Button click test', () => {
    wrapper.vm.onButtonClick();
    expect(wrapper.emitted('button:click:submit')).toBeTruthy();
  });

  it('Button cancel click test', () => {
    wrapper.vm.onButtonCancel();
    expect(wrapper.emitted('button:click:cancel')).toBeTruthy();
  });

  it('Button submit emit test', () => {
    const button = wrapper.findComponent('[data-test="submit-button"]');
    button.find('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('button:click:submit');
  });

  it('Button cancel emit test', () => {
    const button = wrapper.findComponent('[data-test="cancel-button"]');
    button.find('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('button:click:cancel');
  });

  it('Testing input username value and emit', async () => {
    const input = wrapper.findComponent('[data-test="user-input"]');
    await input.find('input').setValue('test');
    expect(input.find('input').element.value).toBe('test');
    expect(wrapper.emitted()).toHaveProperty('login:username:change', [
      ['test'],
    ]);
  });

  it('Testing input password value and emit', async () => {
    const input = wrapper.findComponent('[data-test="password-input"]');
    await input.find('input').setValue('test');
    expect(input.find('input').element.value).toBe('test');
    expect(wrapper.emitted()).toHaveProperty('login:password:change', [
      ['test'],
    ]);
  });
});
