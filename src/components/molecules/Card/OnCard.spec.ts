import { VueWrapper, mount } from '@vue/test-utils';
import OnCard from './OnCard.vue';

describe('Testing OnCard component', () => {
  let wrapper: VueWrapper<any>;

  const props = {
    title: 'Post name',
    date: '06.07.1990',
    image: 'https://test.url',
    imageAlt: 'Image alt',
    description: 'test description',
    rounded: true,
  };

  beforeEach(() => {
    wrapper = mount(OnCard, {
      props,
      global: {
        provide: {
          darkMode: 'darkMode',
        },
      },
    });
  });

  it('Rendering card with title', () => {
    expect(wrapper.vm.title).toBe(props.title);
  });

  it('Rendering card with date', () => {
    expect(wrapper.vm.date).toBe(props.date);
  });

  it('Rendering card with image', () => {
    expect(wrapper.vm.image).toBe(props.image);
  });

  it('Rendering card with date', () => {
    expect(wrapper.vm.imageAlt).toBe(props.imageAlt);
  });

  it('Rendering card with description', () => {
    expect(wrapper.vm.description).toBe(props.description);
  });

  it('Rendering card with rounded', () => {
    expect(wrapper.vm.rounded).toBeTruthy;
  });

  it('Dark mode provide test', () => {
    expect(wrapper.vm.isDarkClass).toEqual({ 'card--is-dark': 'darkMode' });
  });
});
