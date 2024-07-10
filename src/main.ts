import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.scss';
import './assets/styles/fonts.scss';
import router from './router'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

createApp(App).use(router).mount('#app')
