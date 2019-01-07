import Vue from 'vue'
import Vuex from 'vuex'
import ElmentUI from 'element-ui'
import 'mlString'
import store from './store/store'
import App from './App.vue'

if (process.env.NODE_ENV === 'development') {
    require('@/common/mockData')
}

Vue.use(ElmentUI);
Vue.use(Vuex);

window.projectApp = new Vue({
    store,
    components: {
        App
    },
    template: '<App/>'
}).$mount('#app');
