<template>
  <div class="card" @click="gotoReview" :style="{ '--order': index > 10 ? 10 : index }">
    <h4>{{ review.name }}</h4>
    <p :style="{ background: reviewStyle(review.experience) }">
      {{ review.experience }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["review", "index"],
  methods: {
    reviewStyle(experience) {
      switch (experience) {
        case "poor":
          return "#ff6161";
        case "average":
          return "#30a6bd";
        case "great":
          return "#319831";
        default:
          return "yellow";
      }
    },
    gotoReview() {
      this.$router.push("/reviews/" + this.review.name);
      // this.$router.push({
      //   name: 'review-list',
      //   params: {
      //     username: this.review.name
      //   },
      //   query: {
      //     username: this.review.name
      //   }
      // })
    },
  },
};
</script>

<style scoped>
p {
  background: #375bdd;
  padding: 8px 12px;
  color: white;
  font-size: 14px;
  border-radius: 120px;
}

.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #ccc;
  padding: 2px 0;
  user-select: none;
  cursor: pointer;
  padding: 0 10px;
  border-radius: 5px;
  transition: all 0.2s ease-out;
  animation: list-in 0.5s ease forwards;
  animation-delay:calc(var(--order) * 75ms);
  opacity: 0;
}

.card:hover {
  background: #375bdd27;
}

.card:last-child {
  border-bottom: none;
}
</style>