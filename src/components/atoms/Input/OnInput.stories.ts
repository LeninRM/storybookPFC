import OnInput from './OnInput.vue';
import { provide } from 'vue';

export default {
  title: 'OnInput',
  component: OnInput,
  argTypes: {
    isDark: {
      name: 'Dark Mode',
      control: { type: 'boolean' },
      table: {
        category: 'Modes',
      },
    },

    status: {
      name: 'Status',
      control: { type: 'select' },
      options: ['default', 'error', 'focus'],
      table: {
        category: 'Modes',
      },
    },

    type: {
      name: 'Type',
      control: { type: 'select' },
      options: ['text', 'password'],
      table: {
        category: 'Modes',
      },
    },

    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
      table: {
        category: 'Modes',
      },
    },

    label: {
      name: 'Label',
      table: {
        category: 'Props',
      },
    },

    hint: {
      name: 'Hint',
      table: {
        category: 'Props',
      },
    },

    value: {
      name: 'Value',
      table: {
        category: 'Props',
      },
    },
  },
};

const Template = (args) => ({
  components: { OnInput },
  setup() {
    provide('darkMode', args.isDark);

    return { args };
  },
  template: '<OnInput v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'text',
  isDark: false,
  disabled: false,
  label: 'Input label',
  hint: 'Hint example showing',
  value: '',
};
