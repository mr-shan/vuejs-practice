<template>
  <ul style="list-style: none; padding: 0">
    <li v-for="resource in resources" :key="resource.id">
      <learning-resource :resource="resource" />
    </li>
  </ul>
</template>

<script>
import LearningResource from "./LearningResource";
export default {
  components: {
    "learning-resource": LearningResource,
  },
  inject: ["resources"],
};
</script>