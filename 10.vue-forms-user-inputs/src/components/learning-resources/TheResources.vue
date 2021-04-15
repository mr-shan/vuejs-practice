<template>
  <base-card>
    <div>
      <base-button
        :mode="storedResMode"
        @click="setSelectedTab('stored-resources')"
        >Stored Resources</base-button
      >
      <base-button :mode="addResMode" @click="setSelectedTab('add-resource')"
        >Add Resource</base-button
      >
    </div>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from "./StoredResources";
import AddResource from "./AddResource";

export default {
  components: {
    "stored-resources": StoredResources,
    "add-resource": AddResource,
  },
  computed: {
    storedResMode() {
      return this.selectedTab === "stored-resources" ? "primary" : "flat";
    },
    addResMode() {
      return this.selectedTab === "add-resource" ? "primary" : "flat";
    },
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guide",
          title: "Offcial Guide",
          description: "Official Vue.js documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Official Vue.js documentation",
          link: "https://google.com",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(resource) {
      this.selectedTab = resource;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    removeResource(id) {
      const removeElId = this.storedResources.findIndex((e) => e.id === id);
      this.storedResources.splice(removeElId, 1);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
}

div button {
  width: 40%;
  margin-right: 20px;
  max-width: 200px;
}
</style>