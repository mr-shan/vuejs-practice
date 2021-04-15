import { createApp } from "vue";

import App from "./App.vue";
import BadgeItem from "./components/BadgeItem";
import BaseCard from "./components/BaseCard";

const app = createApp(App);

app.component("badge-item", BadgeItem);
app.component("base-card", BaseCard);

app.mount("#app");
