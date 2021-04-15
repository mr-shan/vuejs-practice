<template>
  <base-dialog v-if="formInvalid" title="Invalid" @close="confirmError">
    <template v-slot:default>
        <p>Unfortunately, at least one input is invalid.</p>
        <p>Please check all inputs and make sure to fill them up</p>
    </template>
    <template v-slot:actions>
        <base-button mode="primary" v-on:click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <h3>Add Resource</h3>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" ref="titleRef" type="text" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          ref="descriptionRef"
          name="description"
          rows="3"
          type="text"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" ref="linkRef" type="url" />
      </div>
      <div class="form-control align-center">
        <base-button type="submit" mode="secondary">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>

export default {
  data() {
    return {
      formInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleRef.value;
      const enteredDescription = this.$refs.descriptionRef.value;
      const enteredUrl = this.$refs.linkRef.value;
      if (
        enteredTitle.trim() === "" ||
        enteredDescription.trim() === "" ||
        enteredUrl.trim() === ""
      ) {
        this.formInvalid = true;
        return;
      }
      this.addResource(enteredTitle, enteredDescription, enteredUrl);
      this.$refs.titleRef.value = "";
      this.$refs.descriptionRef.value = "";
      this.$refs.linkRef.value = "";
    },
    confirmError() {
      this.formInvalid = false;
    },
  },
  inject: ["addResource"],
};
</script>

<style scoped>
div {
  padding: 1rem 0;
}
label {
  display: block;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
}
input,
textarea {
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: solid 1px #ccc;
  border-radius: 5px;
  background: #f0f0f0;
  box-shadow: 1px 1px 5px #aaa inset, -3px -3px 10px 2px #fff inset;
  outline-color: rgb(170, 170, 170);
}

input:focus,
textarea:focus {
  background: #eee;
  outline-color: #9bb1ff;
}

h3,
.align-center {
  text-align: center;
}
</style>