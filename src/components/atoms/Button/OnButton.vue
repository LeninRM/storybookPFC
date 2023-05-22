<template>
  <button class="button" :class="[isDarkClass, classes]" @click="onClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { getDarkMode } from '../../../utils/darkMode';

export default defineComponent({
  name: 'OnButton',

  props: {
    label: {
      type: String,
      default: 'Button',
    },

    rounded: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    fullWidth: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['button:click'],
  setup(props, { emit }) {
    const onClick = (): void => emit('button:click');
    const classes = computed(() => ({
      'button--rounded': props.rounded,
      'button--full-width': props.fullWidth,
      'button--disabled': props.disabled,
    }));
    const isDarkClass = getDarkMode();
    return {
      isDarkClass,
      classes,
      onClick,
    };
  },
});
</script>

<style lang="scss">
@import './OnButton';
</style>
