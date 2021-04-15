import axios from "axios";

export const getAllReviews = () => {
  return axios.get("http://localhost:4545/reviews");
};

export const postReview = (reviewData) => {
  return axios.post("http://localhost:4545/reviews", reviewData, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  });
};
