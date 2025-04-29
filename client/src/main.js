import { createApp } from 'vue'
// import {creatPinia} from 'pinia'
import './style.css'
import App from './App.vue'
import router from './routers/routers'


// const pinia = createPinia()
const app = createApp(App)

// app.use(pinia)
app.use(router)

app.mount('#app')      
