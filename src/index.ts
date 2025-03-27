import { createApp } from 'vue';
import Vant, { ConfigProvider } from 'vant';
import App from './App.vue';
import router from './router/index';
import 'normalize.css';
import 'vant/lib/index.css';

const app = createApp(App);

app.use(router)
    .use(ConfigProvider)
    .use(Vant)
    .mount('#root');
