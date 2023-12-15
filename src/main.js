import { createApp } from 'vue'
import App from './App.vue'
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'
import * as echarts from 'echarts';


const TCM = createApp(App)
TCM.config.globalProperties.$echarts = echarts
TCM.use(VueFullPage)
TCM.mount('#app')


