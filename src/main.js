import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
    .use(store)
    .use(router)

const vm = app.mount('#app')

console.log(vm.option)