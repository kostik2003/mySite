
import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './TheHeader.vue'
import TheBody from './TheBody.vue'

const app = createApp(App)

app.component('the-header', TheHeader)
app.component('the-body', TheBody)
app.mount('#app')
