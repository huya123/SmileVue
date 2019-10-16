// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局引入vant,不推荐
// import Vant from 'vant' 
// import 'vant/lib/index.css'
// Vue.use(Vant);

// 全局引入vue-awesome-swiper,不推荐
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'

// 按需引入vant
import {Button, Row, Col, Swipe, SwipeItem, Lazyload} from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
