<template>
  <base-card>
    <h2>Vue User Inputs</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="form-control">
        <label for="user-name">Your Name</label>
        <input
          v-model.trim="userName"
          id="user-name"
          name="user-name"
          type="text"
        />
        <p v-if="!userNameValidation">Please enter valid username</p>
      </div>

      <div class="form-control">
        <h3>My learning experiance was:</h3>
        <div class="form-control-radio">
          <div>
            <input
              v-model="radio"
              name="payment"
              id="poor"
              type="radio"
              value="poor"
            />
            <label for="poor">Poor</label>
          </div>
          <div>
            <input
              v-model="radio"
              name="payment"
              id="average"
              value="average"
              type="radio"
            />
            <label for="average">Average</label>
          </div>
          <div>
            <input
              v-model="radio"
              name="payment"
              value="great"
              id="great"
              type="radio"
            />
            <label for="great">Great</label>
          </div>
        </div>
      </div>

      <div class="form-control">
        <base-button
          style="max-width: 400px; margin: auto"
          mode="secondary"
          type="submit"
          :disabled="!formValidation"
          >Submit</base-button
        >
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      radio: null,
      userName: "",
      isUserNameValid: false,
    };
  },
  emits: ["add-review"],
  methods: {
    submitForm() {
      this.$emit("add-review", {
        name: this.userName,
        experiance: this.radio,
      });
      this.userName = "";
      this.radio = null;
      console.log(this.userName, this.radio);
    },
  },
  computed: {
    userNameValidation() {
      if (this.isUserNameValid) {
        return true;
      } else {
        return this.userName === "";
      }
    },
    formValidation() {
      return this.isUserNameValid && this.radio !== null;
    },
  },
  watch: {
    userName(newVal) {
      this.isUserNameValid = newVal.length > 4;
    },
  },
};
</script>

<style>
.form-control {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: #333;
}

input,
select {
  padding: 0.5rem 0.75rem;
  border: solid 1px #ccc;
  border-radius: 5px;
  background: #f0f0f0;
  box-shadow: 1px 1px 5px #aaa inset, -5px -5px 10px 3px #fff inset;
  outline-color: rgb(170, 170, 170);
  font-size: 16px;
}

.form-control-radio input {
  outline-color: #375bdd;
  box-shadow: none;
  background: #f0f0f0;
  border: solid 1px #ccc;
  height: 18px;
  width: 18px;
  cursor: pointer;
}

.form-control-radio div {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}

.form-control-radio div label {
  font-weight: 400;
  margin-left: 10px;
  margin-bottom: 0;
  user-select: none;
  cursor: pointer;
}

.form-control label {
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bold;
}

h3 {
  margin-top: 0;
  color: #333;
}

button:disabled {
  background: #999;
}
</style>