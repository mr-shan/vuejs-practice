<template>
  <li class="contact-info-container white-box-neo">
    <button v-if="details" @click="$emit('remove-contact', name)" class="close-button">
      &#10006;
    </button>
    <h2>{{ name }}</h2>
    <hr :style="isFavourite && 'border-color: #fb6868'" />
    <button @click="toggleDetails" class="btn-primary">
      {{ details ? "Hide" : "Show" }} Details
    </button>
    <button
      class="btn-primary"
      @click="toggleFavourite(name)"
      :style="isFavourite && 'background: #fb6868; transition: 0.5s'"
    >
      Toggle Favourite
    </button>
    <div v-if="details">
      <div class="contact-item-wrapper"><b>Phone: </b>{{ phone }}</div>
      <div class="contact-item-wrapper"><b>Email: </b>{{ email }}</div>
    </div>
    <!-- <p>{{hello}}</p> -->
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Number,
      required: false,
      default: 0,
      validator: (value) => value === 1 || value === 0,
    },
  },
  // emits: ['toggle-favourite'],
  emits: {
    "toggle-favourite": function (name) {
      if (name) {
        return true;
      } else {
        return false;
      }
    },
    remove: () => true,
  },
  data() {
    return {
      details: false,
    };
  },
  methods: {
    toggleDetails() {
      this.details = !this.details;
    },
    toggleFavourite() {
      this.$emit("toggle-favourite", this.name);
    },
  },
  // inject: ['hello']
};
</script>

<style>
.contact-info-container {
  list-style: none;
}

.contact-info-container h2 {
  color: #42b983;
  font-weight: bold;
}

.contact-info-container hr {
  border: none;
  border: solid 2px #ccc;
  border-radius: 18px;
  transition: all 0.5s ease-out;
  animation: expand 0.5s ease-out forwards;
  margin-bottom: 16px;
}

.contact-info-container button {
  margin: 5px;
  margin-bottom: 18px;
}

ul {
  list-style: none;
  padding: 0;
}

.contact-item-wrapper {
  box-shadow: -4px -4px 5px 0px #fff, 5px 5px 10px 0px #ccc;
  padding: 1rem;
  text-align: center;
  box-sizing: border-box;
  margin: auto;
  border-radius: 8px;
  margin-bottom: 20px;
  color: #333;
  transition: all 0.2s;
}

.contact-item-wrapper:hover {
  box-shadow: -6px -6px 8px 0px #fff, 8px 8px 14px 0px #ccc;
}

.close-button {
  position: absolute;
  right: 10px;
  top: 10px;
  color: red;
  border: none;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

@keyframes expand {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>