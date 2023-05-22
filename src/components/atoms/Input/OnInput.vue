<template>
  <div class="input" :class="[isDarkClass, classes]">
    <label for="input" class="input__label">{{ label }} </label>
    <input
      class="input__input"
      name="input"
      :type="type"
      :value="value"
      @input="inputChange"
    />
    <p class="input__hint">{{ hint }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import './OnInput.scss';
import { getDarkMode } from '../../../utils/darkMode';

export default defineComponent({
  name: 'OnInput',

  props: {
    label: {
      type: String,
      default: '',
    },

    hint: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      default: '',
      validator(value: string) {
        return ['', 'error', 'focus'].includes(value);
      },
    },

    type: {
      type: String,
      default: '',
    },

    value: {
      type: String,
      default: '',
    },
  },
  emits: ['input:change'],

  setup(props, { emit }) {
    const inputChange = (e: Event): void =>
      emit('input:change', (e?.target as HTMLInputElement)?.value);
    const classes = computed(() => ({
      'input--error': props.status === 'error',
      'input--focus': props.status === 'focus',
      'input--disabled': props.disabled,
    }));
    const isDarkClass = getDarkMode();
    return {
      isDarkClass,
      classes,
      inputChange,
    };
  },
});
</script>
