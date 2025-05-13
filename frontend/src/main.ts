import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload';

const app = createApp(App)

app.use(router)

app.use(VueLazyload)

app.mount('#app')
