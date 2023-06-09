import { createApp } from "vue";
import App from "./App";

/** plugins */
import jquery from "@/plugins/jquery";
import storage from "@/plugins/storage";
import sweetalert from "@/plugins/sweetalert";
import tabsslider from "@/plugins/tabsslider";
import VueLazyLoad from "vue3-lazyload";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
/** _app */
import layouts from "@/_app/layouts";
import components from "@/_app/components";
import providers from "@/_app/providers";
import "./assets/main.scss";
import "@fortawesome/fontawesome-free/js/all";
import directive from "./directive";

// import drag from "@/_app/buoyMove";
const app = createApp(App);
app.provide("$jQuery", jquery);
app.provide("$swal", sweetalert);
app.provide("$storage", storage);
app.provide("$tabsslider", tabsslider);
app.use(layouts);
app.use(components);
app.use(VueLazyLoad, {
  loading: "",
  error: "",
});
app.use(directive);
// app.use(drag);

/** services register / 自定義hook */
app.use(providers);

app.mount("#app");
