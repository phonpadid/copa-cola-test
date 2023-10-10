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
import 'vue3-emoji-picker/css'
import EmojiPicker from 'vue3-emoji-picker'
import { DateTime } from "luxon";
const app = createApp(App)
app.component('QuillEditor', QuillEditor)
app.use(Antd)
    .use(router)
    .use(Store)
    .use(router).component("EmojiPicker",EmojiPicker)
    .use(router).component("DateTime",DateTime)
    .mount('#app')
