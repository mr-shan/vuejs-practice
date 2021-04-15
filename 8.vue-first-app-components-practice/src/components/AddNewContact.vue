<template>
  <form v-on:submit.prevent="formSubmitHandler" class="white-box-neo">
    <h3>Add New Contact</h3>
    <div>
      <label for="name">Name</label>
      <input required name="name" type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="name">Phone</label>
      <input required name="name" type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label for="name">Email</label>
      <input required name="name" type="email" v-model="enteredEmail" />
    </div>
    <div class="form-btn-container">
      <button :disabled="!isFormValid" class="btn-primary" type="submit">
        Add Contact
      </button>
      <button class="btn-primary btn-ternery" @click="resetForm">Reset</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
      isFormValid: false,
    };
  },
  watch: {
    enteredName(newVal) {
      if (newVal.slice() !== "") {
        this.isFormValid = this.enteredPhone !== "" && this.enteredEmail !== "";
      } else {
        this.isFormValid = false;
      }
    },
    enteredPhone(newVal) {
      if (newVal.slice() !== "") {
        this.isFormValid = this.enteredName !== "" && this.enteredEmail !== "";
      } else {
        this.isFormValid = false;
      }
    },
    enteredEmail(newVal) {
      if (newVal.slice() !== "") {
        this.isFormValid = this.enteredPhone !== "" && this.enteredName !== "";
      } else {
        this.isFormValid = false;
      }
    },
  },
  emits: {
    "add-contact": function (obj) {
      return obj.name && obj.email && obj.phone;
    },
  },
  methods: {
    formSubmitHandler() {
      const obj = {};
      this.enteredName.slice().length > 0
        ? (obj.name = this.enteredName.slice())
        : undefined;
      this.enteredPhone.slice().length > 0
        ? (obj.phone = this.enteredPhone.slice())
        : undefined;
      this.enteredEmail.slice().length > 0
        ? (obj.email = this.enteredEmail.slice())
        : undefined;
      this.$emit("add-contact", obj);
      this.resetForm();
    },
    resetForm() {
      this.enteredName = "";
      this.enteredPhone = "";
      this.enteredEmail = "";
    },
  },
};
</script>

<style>
form h3 {
  color: #42b983;
}
form div {
  padding: 0.5rem;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
form div label {
  color: #333;
  font-weight: bold;
  width: 65px;
}
form div input {
  color: #333;
  padding: 0.4rem 0.5rem;
  outline-color: #42b983;
  font-size: 14px;
  border-radius: 5px;
  border: solid 1px #999;
}

form div button {
  margin: 0.75rem;
}

form .form-btn-container {
  justify-content: center;
}

form .form-btn-container button {
  width: 100%;
  max-width: 140px;
}
</style>