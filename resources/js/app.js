require("./bootstrap");
import Vue from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue";
import { InertiaProgress } from "@inertiajs/progress";

import vuetify from "@/plugins/vuetify";
import JsonExcel from "vue-json-excel";
import VueSmoothScroll from "vue2-smooth-scroll";

// import dropper from 'dropper.mood';
// import 'dropper.mood/dist/dropper.css';
// import "../sass/app.scss";
import VueMeta from "vue-meta";
import store from "./store";
import axios from "axios";
import Lightbox from "@morioh/v-lightbox";

import VueLang from "@eli5/vue-lang-js";
import translations from "./lang.js";

InertiaProgress.init();
Vue.use(Lightbox);
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
});
Vue.component("downloadExcel", JsonExcel);
Vue.use(VueSmoothScroll, {
    duration: 1000, // animation duration in ms
    offset: 0, // offset in px from scroll element, can be positive or negative
    updateHistory: true // whether to push hash to history
});
Vue.use(VueLang, {
    messages: translations, // Provide locale file
    locale: "en", // Set locale
    fallback: "en" // Set fallback lacale
});
Object.defineProperty(Vue.prototype, "$axios", { value: axios });
Object.defineProperty(Vue.prototype, "route", { value: window.route });

createInertiaApp({
    resolve: name => import(`./Pages/${name}`),
    setup({ el, App, props }) {
        new Vue({
            vuetify,
            store,
            render: h => h(App, props)
        }).$mount(el);
    }
});
