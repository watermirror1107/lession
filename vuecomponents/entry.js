import Vue from 'vue'
import app from './app'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
    render: h => h(app),
    el: '#app'
})
