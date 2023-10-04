import {createApp} from 'vue';
import Antd from 'ant-design-vue';
import Store from "./store";
import App from './App.vue'
import router from "./router";
import 'ant-design-vue/dist/antd.css';
import './tailwind.css';
import '../registerModuleRouter';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import PrimeVue from 'primevue/config';
import EmojiPicker from 'vue3-emoji-picker'
const app = createApp(App)
app.component('QuillEditor', QuillEditor)
app.use(Antd)
app.use(PrimeVue, { ripple: true })
    .use(router)
    .use(Store)
    .use(router).component("EmojiPicker",EmojiPicker)
    .mount('#app')
