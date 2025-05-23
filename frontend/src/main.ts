import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@/assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueToast from 'vue-toast-notification';
import VueLazyload from 'vue-lazyload';

const app = createApp(App)

app.use(router)

app.use(VueToast , {
    position: 'top'
})

app.use(VueLazyload)

app.mount('#app')
