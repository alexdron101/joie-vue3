import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)
// Replace -> app.mount('#app')
router.isReady().then(() => {
  app.mount('#app')
  console.log("app.mount('#app')")
})