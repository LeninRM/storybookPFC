import OnButton from './OnButton.vue';
import { provide } from 'vue';

export default {
  title: 'OnButton',
  argTypes: {
    isDark: {
      name: 'Dark Mode',
      control: { type: 'boolean' },
      table: {
        category: 'Modes',
      },
    },

    rounded: {
      name: 'Rounded',
      control: { type: 'boolean' },
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

    fullWidth: {
      name: 'Full width',
      control: { type: 'boolean' },
      table: {
        category: 'Props',
      },
    },

    onClick: {
      table: {
        category: 'Props',
      },
      action: 'clicked',
    },
  },
};

const Template = (args) => ({
  components: { OnButton },
  setup() {
    provide('darkMode', args.isDark);
    return { args };
  },
  template: '<OnButton v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  isDark: false,
  rounded: false,
  disabled: false,
  label: 'Button',
  fullWidth: false,
};
