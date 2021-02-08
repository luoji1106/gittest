import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import popup from 'components/common/popup'
// Vue.use() 会调用传入的文件里的install方法
Vue.use(popup);

// 图片懒加载插件
import VueImgLoad from 'vue-imgload'
// Vue.use(VueImgLoad)
Vue.use(VueImgLoad, {
  // 加载中显示的图片
  loading: require('assets/img/common/placeholder.png'),
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
