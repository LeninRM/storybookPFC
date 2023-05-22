import OnLogin from './OnLogin.vue';
import { provide } from 'vue';
import * as InputStories from '../../atoms/Input/OnInput.stories';
import * as ButtonStories from '../../atoms/Button/OnButton.stories';
import { ref, computed } from 'vue';

export default {
  title: 'OnLogin',
  argTypes: {
    button: {
      name: 'Button',
      control: { type: 'object' },
    },

    isDark: {
      name: 'Dark Mode',
      control: { type: 'boolean' },
      table: {
        category: 'Global',
      },
    },
  },
};

const Template = (args) => ({
  components: { OnLogin },
  setup() {
    const username = ref('');
    const password = ref('');

    const userInput = computed(() => ({
      ...args.userInput,
      value: username.value,
    }));

    const passwordInput = computed(() => ({
      ...args.passwordInput,
      value: password.value,
    }));

    const onUsernameChange = (value) => {
      username.value = value;
    };

    const onPasswordChange = (value) => {
      password.value = value;
    };

    const onButtonClick = () => {
      alert(username.value + '\n' + password.value);
    };

    const onButtonCancel = () => {
      username.value = '';
      password.value = '';

      alert(username.value + '\n' + password.value);
    };
    provide('darkMode', args.isDark);
    return {
      args,
      userInput,
      passwordInput,
      onUsernameChange,
      onPasswordChange,
      onButtonClick,
      onButtonCancel,
    };
  },
  template: `
    <OnLogin
        v-bind="args"
        :user-input="userInput"
        :password-input="passwordInput"
        @login:username:change="onUsernameChange"
        @login:password:change="onPasswordChange"
        @button:click:submit="onButtonClick"
        @button:click:cancel="onButtonCancel"
    />`,
});

export const Primary = Template.bind({});
Primary.args = {
  isDark: false,
  button: {
    ...ButtonStories.Primary.args,
    label: 'Sign in',
  },
  cancelButton: {
    ...ButtonStories.Primary.args,
    label: 'Cancel',
  },
  userInput: {
    ...InputStories.Primary.args,
    label: 'User',
    hint: 'Your user name or email here',
    type: 'text',
    status: '',
  },
  passwordInput: {
    ...InputStories.Primary.args,
    label: 'Password',
    hint: 'Your password here',
    type: 'password',
    status: '',
  },
};
