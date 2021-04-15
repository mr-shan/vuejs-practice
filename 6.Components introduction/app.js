var appVue = Vue.createApp({
  data() {
    return {
      contacts: [
        {
          name: "Jimmy Koogle",
          phone: "8087882620",
          email: "jimmy@koogle.com",
        },
        {
          name: "Micky Jackson",
          phone: "808788542",
          email: "micky@jackson.com",
        },
      ],
    };
  },
  methods: {},
});

appVue.component("contact-item", {
  data() {
    return {
      details: false,
      name: "Micky Jackson",
      phone: "808788542",
      email: "micky@jackson.com",
    };
  },
  methods: {
    toggleDetails() {
      this.details = !this.details;
    },
  },
  template: `
    <li class="contact-info-container">
      <h2>{{name}}</h2>
      <hr />
      <button @click="toggleDetails">Show Details</button>
      <div v-if="details">
        <div class="contact-item-wrapper">
          <b>Phone: </b>
          <span>{{phone}}</span>
        </div>
        <div class="contact-item-wrapper">
          <b>Email: </b>
          <span>{{email}}</span>
        </div>
      </div>
    </li>
  `,
});

appVue.mount("#app");
