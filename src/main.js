import { createApp } from 'vue'
import { loadFonts } from './plugins/webfontloader'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

// Components
import BaseCard from './components/UI/BaseCard.vue';
import VOtpInput from 'vue3-otp-input';

loadFonts()

const app = createApp(App);

app.component('base-card', BaseCard)
app.component('v-otp-input', VOtpInput)

app.use(vuetify)
app.use(router)
app.mount('#app')
