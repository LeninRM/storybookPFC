import OnCard from './OnCard.vue';
import { provide } from 'vue';
import * as ButtonStories from '../../atoms/Button/OnButton.stories';

export default {
  title: 'OnCard',
  argTypes: {
    isDark: {
      name: 'Dark Mode',
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Card props',
      },
    },

    rounded: {
      name: 'Rounded',
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Card props',
      },
    },

    image: {
      name: 'Image',
      control: 'text',
      defaultValue: 'https://picsum.photos/400',
      table: {
        category: 'Card props',
      },
    },

    imageAlt: {
      name: 'Image alt',
      control: 'text',
      defaultValue: 'random image',
      table: {
        category: 'Card props',
      },
    },

    date: {
      name: 'Date',
      control: 'text',
      defaultValue: '06.07.1990',
      table: {
        category: 'Card props',
      },
    },

    title: {
      name: 'Title',
      control: 'text',
      defaultValue: 'Post name',
      table: {
        category: 'Card props',
      },
    },

    description: {
      name: 'Description',
      control: 'text',
      defaultValue:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi cumque ratione eius hic molestiae ullam quidem veritatis et fuga?',
      table: {
        category: 'Card props',
      },
    },
  },
};

const Template = (args) => ({
  components: { OnCard },
  setup() {
    provide('darkMode', args.isDark);
    return {
      args: {
        ...args,
        buttonProps: {
          disabled: args.disabled,
          label: args.label,
          fullWidth: args.fullWidth,
        },
      },
    };
  },
  template: `<OnCard v-bind="args"/>`,
});
export const Primary = Template.bind({});
Primary.args = {
  ...ButtonStories.Primary.args,
};
Primary.argTypes = {
  label: {
    name: 'Button label',
    control: 'text',
    defaultValue: 'Button',
    table: {
      category: 'Button props',
    },
  },
  fullWidth: {
    name: 'Button Full Width',
    control: 'boolean',
    defaultValue: false,
    table: {
      category: 'Button props',
    },
  },
};

const SecondaryTemplate = (args) => ({
  components: { OnCard },
  setup() {
    provide('darkMode', args.isDark);
    return {
      args: {
        ...args,
      },
    };
  },
  template: `<OnCard v-bind="args">
    <button>Button</button>
    </OnCard>`,
});
export const Secondary = SecondaryTemplate.bind({});
Secondary.storyName = '[slot] Generic Button';
Secondary.args = {};
Secondary.argTypes = {};
