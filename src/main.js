import "bootstrap/dist/css/bootstrap.min.css"
import "@fancyapps/ui/dist/fancybox.css";
import Vue from 'vue'
import App from './App.vue'
import Typewriter from 'vue-typewriter'
import ScrollBar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';


Vue.config.productionTip = false

Vue.use(Typewriter);
ScrollBar.use(OverscrollPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')

import "bootstrap/dist/js/bootstrap.js"
import "@fancyapps/ui/dist/fancybox.esm";
ScrollBar.init(document.querySelector('#app-scrollbar'),{ plugins: { overscroll: { enable: true }}});
ScrollBar.init(document.querySelector('#sidebar-scrollbar'),{ plugins: { overscroll: { enable: true }}});
ScrollBar.initAll();
