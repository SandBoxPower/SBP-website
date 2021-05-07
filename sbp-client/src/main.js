import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "./css/styles.css"

import VueAnime from './js/animejs'
import * as firebase from './firebase'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPhone);

const app = createApp(App)
app.use(router)
app.use(VueAnime)
app.component("font-awesome-icon", FontAwesomeIcon)
app.config.globalProperties.$firebase = firebase
//app.use(BootstrapVue)
//app.use(IconsPlugin)
app.mount('#app')
