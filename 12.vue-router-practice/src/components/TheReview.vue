<template>
  <base-card>
    <div v-if="currentUser.name && currentUser.experience" ref="wrapperDiv">
      <h2>{{ currentUser.name }}</h2>
      <p>
        This user finds our system
        <span style="font-weight: bold" :style="reviewStyle">{{
          currentUser.experience
        }}</span>
      </p>
      <base-button @click="$router.push('/reviews')" class="button">
        x
      </base-button>
    </div>
    <p class="loading-p" v-else style="text-align: center">Loading...</p>
  </base-card>
</template>

<script>
export default {
  inject: ["reviewList"],
  props: ["username"],
  data() {
    return {
      currentUser: {},
    };
  },
  computed: {
    reviewStyle() {
      switch (this.currentUser.experience) {
        case "poor":
          return "color: #ff6161";
        case "average":
          return "color: #30a6bd";
        case "great":
          return "color: #319831";
        default:
          return "color: yellow";
      }
    },
    isDataAvailable() {
      return this.currentUser.name && this.currentUser.experience;
    },
  },
  updated() {
    this.$refs.wrapperDiv.classList.remove("div-expand-out");
    this.$refs.wrapperDiv.classList.add("div-expand-in");
    setTimeout(() => {
      this.$refs.wrapperDiv.classList.remove("div-expand-in");
      this.$refs.wrapperDiv.classList.add("div-expand-out");
    }, 500);
  },
  methods: {
    setCurrentUser(userName, newValue = this.reviewList) {
      const review = newValue.find((e) => e.name === userName);
      this.setCurrentUserValueDelayed(review, userName);
    },
    setCurrentUserValueDelayed(obj = {}, userName) {
      setTimeout(() => {
        this.currentUser = obj;
        if (!obj) {
          setTimeout(() => {
            this.setCurrentUser(userName);
          }, 1000);
        }
      }, 500);
    },
  },
  created() {
    this.setCurrentUser(this.username);
  },
  watch: {
    username(newValue) {
      this.setCurrentUser(newValue);
    },
    reviewList(newValue) {
      console.log(newValue);
      this.setCurrentUser(this.username, newValue);
    },
  },
};
</script>

<style scoped>
.button {
  margin-top: 1rem;
  animation: add-in 0.5s ease-out forwards;
  color: red;
  font-weight: bold;
  padding: 5px 10px;
  position: absolute;
  top: 0;
  right: 18px;
}

div {
  overflow: hidden;
  transition: all 0.5s ease-out;
  animation: expand-out 0.5s ease-out forwards;
  /* animation-delay: 0.5s; */
}

.loading-p {
  animation: expand-out-loading-show 0.5s ease-out forwards;
}

.div-expand-in {
  animation: expand-in 0.5s ease-out forwards;
}

.div-expand-out {
  animation: expand-out 0.5s ease-out forwards;
}
</style>