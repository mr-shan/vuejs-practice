<template>
  <h3 style="margin: 16px 0 12px 16px">Please rate us</h3>
  <div class="form-control ratingForm">
    <base-button
      v-on:click="$emit('update:modelValue', 'poor')"
      :class="{ selected: this.modelValue === 'poor' }"
      mode="ternary"
      type="button"
      >Poor</base-button
    >
    <base-button
      v-on:click="$emit('update:modelValue', 'average')"
      :class="{ selected: this.modelValue === 'average' }"
      mode="ternary"
      type="button"
      >Average</base-button
    >
    <base-button
      v-on:click="$emit('update:modelValue', 'good')"
      :class="{ selected: this.modelValue === 'good' }"
      mode="ternary"
      type="button"
      >Good</base-button
    >
  </div>
</template>

<script>
export default {
  computed: {
    selectedStyle(value) {
      return this.selected === value;
    },
  },
  props: ["model-value"],
  emits: ["update:modelValue"],
};
</script>

<style>
.selected {
  background: rgb(255, 99, 99);
  color: white;
}

.ratingForm {
  display: flex;
  flex-direction: row !important;
}

.ratingForm button {
  margin-right: 16px;
}
</style>