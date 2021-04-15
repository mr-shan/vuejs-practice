<template>
  <teleport to="body">
    <base-dialog v-if="confirmRemove" @close="confirmRemoveHandler(false)">
      <p>Are you sure you want to remove <b>{{ resource.title }} </b> ?</p>
      <template v-slot:actions>
        <base-button @click="confirmRemoveHandler(false)">No, Cancel</base-button>
        <base-button
          style="margin-left: 16px"
          mode="primary"
          @click="confirmRemoveHandler(true)"
          >Yes, Remove</base-button
        >
      </template>
    </base-dialog>
  </teleport>
  <base-card>
    <template v-slot:header>
      <h3>{{ resource.title }}</h3>
      <base-button mode="flat" @click="confirmRemove = true"
        >Remove</base-button
      >
    </template>
    <template #default>
      <p>{{ resource.description }}</p>
      <nav>
        <a :href="resource.link" target="blank">View Resource</a>
      </nav>
    </template>
  </base-card>
</template>

<script>
export default {
  props: {
    resource: Object,
  },
  data() {
    return {
      confirmRemove: false,
    };
  },
  inject: ["removeResource"],
  methods: {
    confirmRemoveHandler(confirmation) {
      if (confirmation) {
        this.removeResource(this.resource.id);
      }
      this.confirmRemove = confirmation;
    },
  },
};
</script>

<style scoped>
a {
  color: #375bdd;
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
}
nav {
  padding-bottom: 0.5rem;
}
</style>




