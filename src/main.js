import {createApp} from 'vue';
import Antd from 'ant-design-vue';
import Store from "./store";
import App from './App.vue'
import router from "./router";
import 'ant-design-vue/dist/antd.css';
import './tailwind.css';
import '../registerModuleRouter';

const app = createApp(App)
app.use(Antd)
    .use(router)
    .use(Store)
    .mount('#app')
