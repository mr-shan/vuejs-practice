import { createApp } from "vue";

import App from "./App.vue";
import Contact from "./components/Contact";
import AddNewContact from "./components/AddNewContact";

const app = createApp(App);

app.component('contact-item', Contact);
app.component('add-new-contact', AddNewContact);

app.mount("#app");
