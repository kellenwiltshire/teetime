import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
// @ts-expect-error-lintingerror
import VueHtmlToPaper from '@/plugins/VueHtmlToPaper';

import './assets/styles.css';

createApp(App).use(router).use(createPinia()).use(VueHtmlToPaper).mount('#app');
