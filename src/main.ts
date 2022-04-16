import { createApp } from 'vue';
import { router } from './routes';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import 'quasar/src/css/index.sass';
import './index.css';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(Quasar, {
	plugins: {}, // import Quasar plugins and add here
});
app.mount('#app');
