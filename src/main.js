import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.directive('mMousewheel', {
//     // 第一次绑定到元素时调用。在这里可以进行一次性的初始化设置:
//     bind (el, binding, vnode) {
//         document.addEventListener('mousewheel', binding.value, false)
//     }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
