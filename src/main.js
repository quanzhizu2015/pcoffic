import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import Header from './components/Header/header.vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import FloatButton from './components/FloatButton/floatButton.vue'
import Header from './components/Header/header.vue'
import Footer from './components/Footer/footer.vue'
import SubHeader from './components/SubHeader/subHeader.vue'
import FloatMenu from './components/FloatMenu/floatMenu.vue'

Vue.component('FloatButton',FloatButton)  // 头部
Vue.component('Header',Header)  // 头部
Vue.component('Footer',Footer)  // 底部
Vue.component('SubHeader',SubHeader)  // 子页面顶部
Vue.component('FloatMenu',FloatMenu)  // 浮窗

Vue.config.productionTip = false;
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// Vue.use(VueAwesomeSwiper);
// import style (<= Swiper 5.x)
//import 'swiper/swiper-bundle.css'
console.log(process.env.VUE_APP_BASE_API)
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(Antd);

const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
        return EventBus;
    }
  }
});

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
