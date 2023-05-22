<template>
  <div class="container">
    <div class="form-container">
      <OnInput
        data-test="user-input"
        v-bind="userInput"
        @input:change="onUsernameChange"
      />
      <OnInput
        data-test="password-input"
        v-bind="passwordInput"
        @input:change="onPasswordChange"
      />
    </div>
    <div class="button-container">
      <OnButton
        data-test="submit-button"
        v-bind="button"
        @button:click="onButtonClick"
      ></OnButton>
      <OnButton
        data-test="cancel-button"
        v-bind="cancelButton"
        @button:click="onButtonCancel"
      ></OnButton>
    </div>
  </div>
</template>

<script lang="ts">
import OnInput from '../../atoms/Input/OnInput.vue';
import OnButton from '../../atoms/Button/OnButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OnLogin',
  components: { OnInput, OnButton },
  props: {
    userInput: {
      type: Object,
      default: () => ({
        status: '',
        type: '',
        disabled: '',
        label: '',
        hint: '',
      }),
    },

    passwordInput: {
      type: Object,
      default: () => ({
        status: '',
        type: '',
        disabled: '',
        label: '',
        hint: '',
      }),
    },

    button: {
      type: Object,
      default: () => ({
        label: '',
        disabled: '',
        rounded: '',
        fullWidth: '',
      }),
    },

    cancelButton: {
      type: Object,
      default: () => ({
        label: '',
        disabled: '',
        rounded: '',
        fullWidth: '',
      }),
    },
  },
  emits: [
    'login:username:change',
    'login:password:change',
    'button:click:submit',
    'button:click:cancel',
  ],

  setup(props, { emit }) {
    const onUsernameChange = (value: Event): void =>
      emit('login:username:change', value);
    const onPasswordChange = (value: Event): void =>
      emit('login:password:change', value);
    const onButtonClick = (): void => emit('button:click:submit');
    const onButtonCancel = (): void => emit('button:click:cancel');
    return {
      onUsernameChange,
      onPasswordChange,
      onButtonClick,
      onButtonCancel,
    };
  },
});
</script>

<style lang="scss">
@import './OnLogin.scss';
</style>
