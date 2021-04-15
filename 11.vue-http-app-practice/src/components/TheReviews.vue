<template>
  <base-card>
    <h2>Reviews</h2>
    <hr />
    <div class="card" v-for="(review, index) in reviewList" :key="index">
      <h4>{{ review.name }}</h4>
      <p :style="{ background: reviewStyle(review.experiance) }">
        {{ review.experiance.toUpperCase() }}
      </p>
    </div>
  </base-card>
</template>

<script>
export default {
  props: {
    reviewList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    reviewStyle(experiance) {
      switch (experiance) {
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
  },
};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #ccc;
  padding: 2px 0;
}

h2 {
  text-align: center;
  color: #375bdd;
}

hr {
  border: none;
  border-bottom: solid 4px #ccc;
  border-radius: 10px;

  margin-top: 0;
  padding-top: 0;
}

.card:last-child {
  border-bottom: none;
}

p {
  background: #375bdd;
  padding: 8px 12px;
  color: white;
  font-size: 14px;
  border-radius: 120px;
}
</style>