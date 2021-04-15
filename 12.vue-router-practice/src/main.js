import { createApp } from "vue";

import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard";
import BaseButton from "./components/UI/BaseButton";
import BaseDialog from "./components/UI/BaseDialog";
import BaseDialog2 from "./components/UI/BaseDialog2";
import router from "./router";

const app = createApp(App);

app.use(router);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.component("base-dialog2", BaseDialog2);

router
  .isReady()
  .then(() => console.log("Router is ready"))
  .catch((error) => console.error(error));

app.mount("#app");
