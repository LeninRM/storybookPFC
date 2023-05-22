import OnHeader from './OnHeader.vue';

export default {
  title: 'OnHeader',
  component: OnHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: { OnHeader },
  setup() {
    return { ...args };
  },
  template: '<OnHeader :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};
