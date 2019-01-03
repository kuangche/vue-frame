import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import 'mlString'
import store from './store/store'

console.log('#000000'.colorToRgba(0.5))

Vue.use(Vuex);
new Vue({
    store,
    components: {
        App
    },
    template: '<App/>'
}).$mount('#app');
