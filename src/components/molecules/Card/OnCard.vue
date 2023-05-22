<template>
  <div class="card" :class="[isDarkClass, classes]">
    <div class="card__image-container">
      <img class="card__image" :alt="imageAlt" :src="image" />
    </div>
    <div class="card__content">
      <p class="card__date">{{ date }}</p>
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__description">{{ description }}</p>
      <slot>
        <OnButton v-if="buttonProps.label" v-bind="buttonProps" />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { getDarkMode } from '../../../utils/darkMode';
import OnButton from '../../atoms/Button/OnButton.vue';

export default defineComponent({
  name: 'OnCard',

  components: { OnButton },

  props: {
    rounded: {
      type: Boolean,
      default: false,
    },

    image: {
      type: String,
      default: '',
    },

    imageAlt: {
      type: String,
      default: '',
    },

    date: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      requiered: true,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    buttonProps: {
      type: Object,
      default: () => ({
        label: '',
        fullWidth: false,
      }),
    },
  },

  setup(props) {
    const isDarkClass = getDarkMode();
    return {
      isDarkClass,
      classes: computed(() => ({
        'card--rounded': props.rounded,
      })),
    };
  },
});
</script>

<style lang="scss">
@import './OnCard.scss';
</style>
