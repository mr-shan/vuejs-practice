<template>
  <router-view></router-view>
  <base-card>
    <h2>Reviews</h2>
    <hr />

    <div v-if="reviewList.length > 0">
      <review-item
        v-for="(review, index) in reviewList"
        :key="index"
        :review="review"
        :index="index + 1"
      />
    </div>

    <div
      style="text-align: center; padding: 1rem"
      v-if="!reviewList || reviewList.length === 0"
    >
      No reviews found
    </div>
  </base-card>
</template>

<script>
import ReviewItem from "./ReviewItem";
export default {
  components: { "review-item": ReviewItem },
  inject: ["reviewList"],
};
</script>

<style scoped>
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
</style>