import { createApp } from 'vue';
import { router } from './routes';
import { createPinia } from 'pinia';
import './index.css';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia()

app.use(pinia);
app.use(router)
app.mount('#app');

