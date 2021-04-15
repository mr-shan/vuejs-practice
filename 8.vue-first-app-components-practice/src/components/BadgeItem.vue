<template>
  <span :class="classes">
    {{ badgeName }}
  </span>
</template>

<script>
export default {
  props: {
    badgeName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      switch (this.type) {
        case "admin":
          return "badge-admin";
        case "author":
          return "badge-author";
        default: return '';
      }
    },
  },
};
</script>

<style scoped>
span {
  color: white;
  font-size: 14px;
  padding: 0.75rem 1rem;
  border-radius: 20px;
  box-shadow: -5px -5px 8px 3px #fff, 3px 3px 8px #999;
  cursor: pointer;
  transition: all 0.25s;
}

span:hover {
  box-shadow: -5px -5px 5px 3px #fff, 2px 2px 6px #777;
}
</style>