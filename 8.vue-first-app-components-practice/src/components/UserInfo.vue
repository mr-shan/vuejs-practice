<template>
  <base-card>
    <template v-slot:header>
      <h3>{{ fullName }}</h3>
      <badge-item :type="role" :badge-name="role.toUpperCase()" />
    </template>
    <template #default>
        <p>{{ fullText }}</p>
    </template>
  </base-card>
</template>

<script>

export default {
  props: {
    fullName: {
      type: String,
      required: true,
    },
    fullText: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
};
</script>
