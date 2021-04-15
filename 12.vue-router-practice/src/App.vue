<template>
  <the-header />
  <the-nav />
  <!-- <the-form :reviews="reviews" @add-review="addReview" />
  <the-reviews v-if="reviews.length > 0" :reviewList="reviews" /> -->
  <router-view></router-view>

  <router-view name="footer-route"></router-view>
</template>

<script>
import * as http from "./service/http";

import TheHeader from "./components/layout/TheHeader";
import TheNav from "./components/layout/TheNav";

const app = {
  components: {
    "the-header": TheHeader,
    "the-nav": TheNav,
  },
  data() {
    return {
      reviews: [],
    };
  },
  methods: {
    addReview(review) {
      http
        .postReview(review)
        .then((res) => {
          if (res.statusText === "OK") {
            this.setReviews(res.data);
          }
        })
        .catch((error) => console.error(error));
    },
    setReviews(reviewList) {
      while (this.reviews.length > 0) {
        this.reviews.splice(0, 1);
      }
      for (const rev of reviewList) {
        this.reviews.push(rev);
      }
    },
  },
  provide() {
    return {
      reviewList: this.reviews,
      addReview: this.addReview,
    };
  },
  mounted() {
    http
      .getAllReviews()
      .then((res) => {
        if (res.statusText === "OK") {
          this.setReviews(res.data);
        }
      })
      .catch((error) => console.error(error));
  },
};
export default app;
</script>

<style>
:root {
  --color-main: "#375bdd";
}
body {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 1.5rem;
  margin: 0;
  box-sizing: border-box;
  max-width: 800px;
  margin: auto;
  background: #f0f0f0;
}

@keyframes add-in {
  from {
    transform: translateY(-10%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in {
  from {
    transform: translateY(-30%);
    opacity: 0.2;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pop-up {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes list-in {
  from {
    transform: translateX(-10%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes expand-out {
  from {
    height: 0px;
  }

  to {
    height: 104px;
  }
}

@keyframes expand-in {
  to {
    height: 0px;
  }

  from {
    height: 104px;
  }
}

@keyframes expand-out-loading-show {
  from {
    height: 0px;
  }

  to {
    height: 20px;
  }
}

@keyframes expand-out-loading-hide {
  from {
    height: 20px;
  }

  to {
    height: 0px;
  }
}

</style>