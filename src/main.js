import { createApp } from 'vue'
import { createRouter } from '@/router'
import Antd from 'ant-design-vue';

import './assets/css/reset.min.css'

import App from './App.vue'

const router = createRouter()
const app = createApp(App)

app.use(Antd).use(router).mount('#app')

